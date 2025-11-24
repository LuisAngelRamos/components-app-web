# Build del Paquete Shared

Este paquete está configurado para compilar los componentes TypeScript a JavaScript para máxima compatibilidad.

## Build

### Compilar el paquete

Desde la raíz del proyecto:
```bash
npm run build:shared
```

O directamente desde la carpeta `shared`:
```bash
cd shared
npm run build
```

### Estructura de salida

El build genera dos versiones en la carpeta `dist/`:

```
dist/
├── index.js              # CommonJS (para Node.js y bundlers antiguos)
├── index.d.ts            # Definiciones de tipos TypeScript
├── components/           # Componentes compilados (CJS)
├── design-system/        # Design system compilado (CJS)
└── esm/
    ├── index.js          # ES Modules (para bundlers modernos)
    └── ...               # Misma estructura que dist/
```

## Instalación desde Git

Cuando instalas el paquete desde Git usando:
```json
"react-native-components-web": "git+https://github.com/user/repo.git"
```

El script `prepare` se ejecutará automáticamente después de `npm install` y compilará los componentes.

**Importante:** Asegúrate de que los archivos `dist/` estén incluidos en el repositorio Git o que TypeScript esté disponible para que el script `prepare` funcione.

## Entry Points

El `package.json` está configurado con múltiples entry points:

- **`main`**: `dist/index.js` - CommonJS (default)
- **`module`**: `dist/esm/index.js` - ES Modules
- **`types`**: `dist/index.d.ts` - Definiciones TypeScript

### Uso en diferentes entornos

**CommonJS (Node.js, Metro bundler):**
```javascript
const { Button, Card } = require('@components-app/shared');
```

**ES Modules (Webpack 5+, Vite, Rollup):**
```javascript
import { Button, Card } from '@components-app/shared';
```

**TypeScript:**
```typescript
import { Button, Card } from '@components-app/shared';
// TypeScript usará automáticamente dist/index.d.ts
```

## Publicación

Antes de publicar, el script `prepublishOnly` ejecutará automáticamente el build:

```bash
cd shared
npm publish --access public
```

## Archivos incluidos en el paquete

Solo se publican los siguientes archivos (según `.npmignore`):

- `dist/` - Archivos compilados
- `README.md` - Documentación

Los archivos fuente TypeScript (`.ts`, `.tsx`) no se incluyen en el paquete publicado.

## Troubleshooting

### El build falla

1. Verifica que TypeScript esté instalado: `npm install`
2. Limpia el build anterior: `npm run clean`
3. Intenta build de nuevo: `npm run build`

### Problemas de compatibilidad en proyectos externos

1. Asegúrate de ejecutar `npm run build:shared` antes de hacer commit/push (si instalas desde Git)
2. Verifica que el proyecto externo tenga las `peerDependencies` instaladas:
   ```bash
   npm install react react-native
   ```
3. Si usas Metro bundler, resetea la caché:
   ```bash
   npx react-native start --reset-cache
   ```

### Instalación desde Git

Si instalas desde Git y los archivos compilados no están disponibles:

1. El script `prepare` se ejecutará automáticamente después de `npm install`
2. Asegúrate de que TypeScript esté en `devDependencies` (ya está configurado)
3. Si el build falla, puedes compilar manualmente:
   ```bash
   cd node_modules/@components-app/shared
   npm run build
   ```
