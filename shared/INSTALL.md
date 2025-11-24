# Instalación desde Git

Este paquete puede instalarse directamente desde GitHub.

## Instalación

```bash
npm install react-native-components-web@git+https://ghp_TOKEN@github.com/LuisAngelRamos/components-app-web.git
```

O en tu `package.json`:
```json
{
  "dependencies": {
    "react-native-components-web": "git+https://ghp_TOKEN@github.com/LuisAngelRamos/components-app-web.git"
  }
}
```

## Proceso Automático

Cuando instalas desde Git:

1. **npm clona el repositorio** en `node_modules/react-native-components-web`
2. **Ejecuta `npm install`** dentro del paquete clonado
3. **Ejecuta el script `prepare`** automáticamente, que compila los componentes:
   ```bash
   npm run build
   ```
4. Los archivos compilados quedan en `dist/` y `dist/esm/`

## Requisitos

El script `prepare` requiere:
- TypeScript (se instala automáticamente desde `devDependencies`)
- Node.js y npm funcionando

## Troubleshooting

### El build falla durante la instalación

Si el script `prepare` falla:

1. Verifica que Node.js y npm funcionen correctamente
2. Intenta instalar manualmente:
   ```bash
   cd node_modules/react-native-components-web
   npm install
   npm run build
   ```

### Los componentes no se encuentran

Verifica que:
1. El script `prepare` se ejecutó correctamente (debe haber una carpeta `dist/`)
2. Tu proyecto tiene las `peerDependencies` instaladas:
   ```bash
   npm install react react-native
   ```

### Los archivos dist/ no existen

Si los archivos compilados no están disponibles, puedes compilar manualmente:

```bash
cd node_modules/react-native-components-web
npm run build
```

## Alternativa: Incluir dist/ en el repositorio

Si prefieres evitar el build durante la instalación, puedes:

1. Compilar antes de hacer commit:
   ```bash
   cd shared
   npm run build
   ```

2. Incluir `shared/dist/` en el repositorio (removiendo `dist/` del `.gitignore`)

3. Esto hará que los archivos compilados estén siempre disponibles

