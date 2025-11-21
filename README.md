# Components App Web

Proyecto para crear componentes reutilizables que funcionan tanto en React Native como en Web usando `react-native-web`.

## Estructura del Proyecto

```
ComponentsAppWeb/
├── shared/              # Componentes compartidos (React Native)
│   ├── components/      # Componentes reutilizables
│   └── index.js         # Exportaciones principales
├── web/                 # Aplicación web
│   ├── src/
│   └── vite.config.js   # Configuración de Vite con react-native-web
└── mobile/              # Aplicación React Native (opcional)
```

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar la aplicación web:
```bash
npm run web
```

La aplicación estará disponible en `http://localhost:5173`

## Componentes Disponibles

- **Button**: Botón con variantes (primary, secondary, outline)
- **Card**: Tarjeta con sombra y bordes redondeados
- **Input**: Campo de texto con label y validación de errores
- **Text**: Texto con variantes tipográficas (h1, h2, h3, body, caption)

## Uso de Componentes

Los componentes se importan desde el paquete compartido:

```javascript
import { Button, Card, Input, Text } from '@components-app/shared';
```

Estos componentes funcionan tanto en web (usando react-native-web) como en React Native sin cambios.

## Agregar Nuevos Componentes

1. Crea el componente en `shared/components/`
2. Usa solo APIs de React Native (View, Text, StyleSheet, etc.)
3. Exporta el componente en `shared/index.js`
4. El componente estará disponible automáticamente en web y mobile

## Usar los Componentes desde Otro Proyecto React Native

El paquete `@components-app/shared` puede ser usado en otros proyectos React Native.

### Opción 1: Usar npm link (Desarrollo Local)

1. **Linkear el paquete desde este proyecto:**
   ```bash
   npm run link:shared
   ```

2. **En tu proyecto React Native:**
   ```bash
   npm link @components-app/shared
   npm install react react-native
   ```

3. **Usar los componentes:**
   ```javascript
   import { Button, Card, Input, Text } from '@components-app/shared';
   ```

Para más detalles, consulta [USAGE.md](./USAGE.md).

### Opción 2: Publicar a npm

1. Incrementa la versión en `shared/package.json`
2. Publica el paquete:
   ```bash
   cd shared && npm publish --access public
   ```
3. Instala en tu proyecto:
   ```bash
   npm install @components-app/shared
   ```

## Tecnologías

- **React 18**: Framework base
- **React Native**: Para componentes compartidos
- **react-native-web**: Para renderizar componentes RN en web
- **Vite**: Build tool para la aplicación web

## Validación y Linting

El proyecto incluye ESLint configurado para prevenir errores comunes:

### Reglas Importantes

- **JSX solo en archivos `.jsx`**: Los archivos con JSX deben usar la extensión `.jsx`, no `.js`. Esto es requerido por Vite.
- El linter detectará automáticamente si se intenta usar JSX en archivos `.js` y mostrará un error.

### Comandos de Linting

```bash
# Ejecutar el linter
npm run lint

# Ejecutar el linter y corregir errores automáticamente
npm run lint:fix
```

### Configuración

Las reglas están configuradas en `.eslintrc.js`. La regla principal es:
- `react/jsx-filename-extension`: Prohíbe JSX en archivos `.js`

