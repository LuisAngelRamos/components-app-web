# Guía de Uso del Paquete Shared

Esta guía explica cómo usar los componentes compartidos desde otro proyecto React Native.

## Opción 1: Usar npm link (Desarrollo Local)

Esta es la mejor opción para desarrollo local mientras trabajas en ambos proyectos.

### Paso 1: Linkear el paquete desde este proyecto

```bash
cd /Users/lramosm/Documents/ComponentsAppWeb/shared
npm link
```

O desde la raíz del proyecto:

```bash
npm run link:shared
```

### Paso 2: Linkear el paquete en tu proyecto React Native

En tu proyecto React Native:

```bash
cd /ruta/a/tu/proyecto-react-native
npm link @components-app/shared
```

### Paso 3: Instalar dependencias peer

Asegúrate de que tu proyecto tenga las dependencias necesarias:

```bash
npm install react react-native
```

### Paso 4: Usar los componentes

```javascript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Input, Text } from '@components-app/shared';

function App() {
  return (
    <View style={styles.container}>
      <Text variant="h1">Mi App</Text>
      <Card>
        <Input 
          label="Email"
          placeholder="tu@email.com"
        />
        <Button 
          title="Enviar"
          variant="primary"
          onPress={() => console.log('Enviado')}
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

### Deslinkear el paquete

Cuando termines de desarrollar:

```bash
# En tu proyecto React Native
npm unlink @components-app/shared

# En este proyecto (opcional)
cd shared && npm unlink
```

## Opción 2: Publicar a npm (Producción)

### Paso 1: Configurar npm (primera vez)

```bash
npm login
```

### Paso 2: Publicar el paquete

```bash
cd shared
npm publish --access public
```

**Nota:** Asegúrate de incrementar la versión en `shared/package.json` antes de publicar.

### Paso 3: Instalar en tu proyecto

```bash
npm install @components-app/shared
```

## Opción 3: Usar desde un monorepo

Si ambos proyectos están en un monorepo:

```bash
# En la raíz del monorepo
npm install @components-app/shared
```

## Configuración de Metro (React Native)

Si Metro no detecta los cambios después de linkear, configura `metro.config.js`:

```javascript
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    resolver: {
      sourceExts: [...sourceExts, 'jsx'],
      // Si usas npm link, agrega:
      extraNodeModules: {
        '@components-app/shared': require.resolve('@components-app/shared'),
      },
    },
    watchFolders: [
      // Ruta absoluta al paquete shared (solo si usas npm link)
      path.resolve(__dirname, '../ComponentsAppWeb/shared'),
    ],
  };
})();
```

## Resolver problemas comunes

### Error: "Unable to resolve module @components-app/shared"

**Solución 1:** Verifica que el link esté correcto:
```bash
npm list @components-app/shared
```

**Solución 2:** Resetea el cache de Metro:
```bash
npx react-native start --reset-cache
```

**Solución 3:** Reinstala node_modules:
```bash
rm -rf node_modules
npm install
```

### Error: "Module not found: Can't resolve 'react'"

Asegúrate de que las dependencias peer estén instaladas en tu proyecto:
```bash
npm install react react-native
```

### Los cambios no se reflejan

1. Resetea el cache de Metro: `npx react-native start --reset-cache`
2. Verifica que el link esté activo: `npm list @components-app/shared`
3. Reinicia el bundler de Metro

## Estructura del paquete

```
shared/
├── components/          # Componentes React Native
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Input.jsx
│   └── Text.jsx
├── index.js            # Punto de entrada
├── package.json        # Configuración del paquete
└── README.md          # Documentación
```

## Siguiente paso: Publicar a npm

Cuando estés listo para distribuir el paquete:

1. Incrementa la versión en `shared/package.json`
2. Actualiza el CHANGELOG (si tienes uno)
3. Publica: `cd shared && npm publish --access public`

Para publicar versiones beta:
```bash
npm publish --tag beta --access public
```

