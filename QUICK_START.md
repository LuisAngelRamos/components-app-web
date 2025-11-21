# Guía Rápida: Usar Componentes en Proyecto Externo

## 🚀 Opción 1: Desarrollo Local (npm link) - Recomendado

### En este proyecto (ComponentsAppWeb):

```bash
# Desde la raíz del proyecto
npm run link:shared
```

O manualmente:

```bash
cd shared
npm link
```

### En tu proyecto React Native externo:

```bash
# 1. Ir a tu proyecto
cd /ruta/a/tu-proyecto-react-native

# 2. Linkear el paquete
npm link @components-app/shared

# 3. Instalar dependencias peer (si no las tienes)
npm install react react-native

# 4. Si usas Metro, resetea el cache
npx react-native start --reset-cache
```

### Usar los componentes:

```javascript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Input, Text } from '@components-app/shared';

function MiApp() {
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <Text variant="h1">Mi Aplicación</Text>
      
      <Card>
        <Input
          label="Email"
          placeholder="tu@email.com"
          value={email}
          onChangeText={setEmail}
        />
        
        <Button
          title="Enviar"
          variant="primary"
          onPress={() => console.log('Presionado')}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
```

### Deslinkear cuando termines:

```bash
# En tu proyecto externo
npm unlink @components-app/shared

# En este proyecto (opcional)
npm run unlink:shared
```

---

## 📦 Opción 2: Publicar a npm (Producción)

### Paso 1: Preparar el paquete

1. **Incrementa la versión** en `shared/package.json`:
   ```json
   "version": "1.0.1"  // o 1.1.0, 2.0.0, etc.
   ```

2. **Verifica que esté listo**:
   ```bash
   cd shared
   npm pack  # Esto crea un .tgz para probar
   ```

### Paso 2: Publicar a npm

```bash
cd shared
npm publish --access public
```

**Primera vez:** Necesitarás hacer login:
```bash
npm login
```

### Paso 3: Instalar en tu proyecto externo

```bash
# En tu proyecto React Native
npm install @components-app/shared

# Las peerDependencies deberían estar ya instaladas
# pero si no, instálalas:
npm install react react-native
```

### Usar los componentes:

```javascript
import { Button, Card, Input, Text } from '@components-app/shared';
// ... igual que en la opción 1
```

---

## 🔧 Opción 3: Instalar desde Git (sin publicar en npm)

### Instalar directamente desde GitHub:

```bash
# En tu proyecto React Native
npm install git+https://github.com/LuisAngelRamos/components-app-web.git#main:shared
```

O usando SSH:

```bash
npm install git+ssh://git@github.com:LuisAngelRamos/components-app-web.git#main:shared
```

**Nota:** Esto instala desde la rama `main`, carpeta `shared`.

---

## ⚠️ Solución de Problemas

### Error: "Unable to resolve module @components-app/shared"

**Solución 1:** Resetea el cache de Metro:
```bash
npx react-native start --reset-cache
```

**Solución 2:** Verifica que el link esté activo:
```bash
npm list @components-app/shared
```

**Solución 3:** Reinstala:
```bash
# Deslinkea
npm unlink @components-app/shared

# Linkea de nuevo
npm link @components-app/shared

# Resetea Metro
npx react-native start --reset-cache
```

### Error: "Module not found: Can't resolve 'react'"

**Solución:** Instala las peerDependencies:
```bash
npm install react react-native
```

### Los cambios no se reflejan (con npm link)

1. Resetea Metro: `npx react-native start --reset-cache`
2. Verifica que estés modificando los archivos correctos
3. Reinicia el servidor de Metro

---

## 📝 Configuración Recomendada de Metro

Si usas `npm link` y tienes problemas, crea o actualiza `metro.config.js`:

```javascript
const { getDefaultConfig } = require('metro-config');
const path = require('path');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  
  return {
    resolver: {
      sourceExts: [...sourceExts, 'jsx'],
      // Si usas npm link, agrega el watchFolders
      watchFolders: [
        path.resolve(__dirname, '../ComponentsAppWeb/shared'),
      ],
    },
  };
})();
```

---

## ✅ Resumen de Opciones

| Opción | Cuándo usar | Ventajas | Desventajas |
|--------|-------------|----------|-------------|
| **npm link** | Desarrollo local | Cambios inmediatos, no requiere publicación | Solo funciona localmente |
| **npm publish** | Producción | Estable, versionado, disponible para todos | Requiere publicar cada cambio |
| **Git directo** | Testing/Desarrollo | No requiere npm account | Más lento, menos estable |

---

## 🎯 Recomendación

- **Durante desarrollo:** Usa `npm link` (Opción 1)
- **Para producción:** Publica a npm (Opción 2)
- **Para testing rápido:** Usa Git directo (Opción 3)


