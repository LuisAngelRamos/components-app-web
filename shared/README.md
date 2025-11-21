# @components-app/shared

Componentes compartidos de React Native reutilizables para web y mobile.

## Instalación

### Opción 1: Desde un paquete publicado (npm)

```bash
npm install @components-app/shared
```

### Opción 2: Usando npm link (desarrollo local)

Desde este proyecto:

```bash
cd shared
npm link
```

Desde tu proyecto React Native:

```bash
npm link @components-app/shared
```

### Opción 3: Desde el workspace (monorepo)

Si estás usando workspaces de npm, el paquete ya está disponible:

```bash
npm install @components-app/shared
```

## Uso

```javascript
import React from 'react';
import { View } from 'react-native';
import { Button, Card, Input, Text } from '@components-app/shared';

function MyApp() {
  return (
    <View>
      <Text variant="h1">Mi Aplicación</Text>
      <Card>
        <Input 
          label="Email"
          placeholder="tu@email.com"
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
```

## Componentes Disponibles

### Button

Botón con múltiples variantes.

```javascript
<Button 
  title="Click me"
  variant="primary" // 'primary' | 'secondary' | 'outline'
  onPress={() => {}}
  disabled={false}
/>
```

**Props:**
- `title` (string, requerido): Texto del botón
- `onPress` (function, requerido): Función a ejecutar al presionar
- `variant` (string, opcional): Estilo del botón ('primary' | 'secondary' | 'outline')
- `disabled` (boolean, opcional): Deshabilita el botón
- `style` (object, opcional): Estilos personalizados
- `textStyle` (object, opcional): Estilos personalizados para el texto

### Card

Contenedor con sombra y bordes redondeados.

```javascript
<Card>
  <Text>Contenido de la tarjeta</Text>
</Card>
```

**Props:**
- `children` (node, requerido): Contenido de la tarjeta
- `style` (object, opcional): Estilos personalizados

### Input

Campo de texto con label y validación de errores.

```javascript
<Input
  label="Email"
  placeholder="tu@email.com"
  value={email}
  onChangeText={setEmail}
  error={error}
  secureTextEntry={false}
/>
```

**Props:**
- `label` (string, opcional): Etiqueta del campo
- `placeholder` (string, opcional): Texto placeholder
- `value` (string, opcional): Valor del campo
- `onChangeText` (function, opcional): Función cuando cambia el texto
- `error` (string, opcional): Mensaje de error a mostrar
- `secureTextEntry` (boolean, opcional): Para campos de contraseña
- `style` (object, opcional): Estilos personalizados
- Cualquier otra prop de `TextInput` de React Native

### Text

Componente de texto con variantes tipográficas.

```javascript
<Text variant="h1">Título Principal</Text>
<Text variant="body">Texto normal</Text>
```

**Props:**
- `variant` (string, opcional): Variante tipográfica ('h1' | 'h2' | 'h3' | 'body' | 'caption')
- `style` (object, opcional): Estilos personalizados
- `children` (node, requerido): Texto a mostrar
- Cualquier otra prop de `Text` de React Native

## Requisitos

- React >= 18.0.0
- React Native >= 0.70.0

## Configuración de Metro (React Native)

Si estás usando npm link y Metro no detecta los cambios, puedes necesitar resetear el cache:

```bash
npx react-native start --reset-cache
```

O agregar esta configuración en tu `metro.config.js`:

```javascript
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    resolver: {
      sourceExts: [...sourceExts, 'jsx'],
    },
  };
})();
```

## Desarrollo

Para desarrollar este paquete localmente:

1. Clona el repositorio
2. Instala dependencias: `npm install`
3. Haz cambios en `shared/components/`
4. Usa `npm link` para probarlo en tu proyecto

## Licencia

MIT

