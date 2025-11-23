# Design System - Colores

Esta carpeta contiene la definición de tokens de color del design system, organizados en tokens base y helpers semánticos.

## Estructura

```
design-system/
├── colors/
│   ├── tokens.ts          # Tokens de color base (HEX)
│   ├── helpers.ts         # Helpers semánticos (primary/secondary)
│   └── index.ts           # Exportaciones centralizadas
└── index.ts               # Exportación principal del design system
```

## Uso

### Tokens Base

```typescript
import { colorTokens } from '@components-app/shared/design-system';

// Usar tokens directamente
const red = colorTokens.Red_90h;
const white = colorTokens.Text_White;
const background = colorTokens.Background_Primary;
```

### Helpers con getHelperColor

```typescript
import { getHelperColor } from '@components-app/shared/design-system';

// Obtener color primary (default)
const alertBadgeColor = getHelperColor('alertBadge'); // Retorna primary

// Obtener color secondary
const alertTextSecondary = getHelperColor('alertText', 'secondary');

// Obtener color primary explícitamente
const successBadgeColor = getHelperColor('successBadge', 'primary');
```

### Helpers Directos

```typescript
import { colorHelpers } from '@components-app/shared/design-system';

// Acceder directamente a los helpers
const alertBadgePrimary = colorHelpers.alertBadge.primary;
const alertBadgeSecondary = colorHelpers.alertBadge.secondary;
```

## Helpers Disponibles

Todos los helpers tienen variantes `primary` y `secondary`:

- `alertBadge` - Badge de alerta (rojo)
- `alertText` - Texto de alerta (rojo primario y secundario)
- `alertShade` - Sombra/fondo de alerta
- `warning` - Warning (amarillo)
- `successBadge` - Badge de éxito (verde)
- `successShade` - Sombra/fondo de éxito
- `neutral` - Colores neutros

## Ejemplos de Uso en Componentes

```typescript
import { getHelperColor } from '@components-app/shared/design-system';

// En un componente
const backgroundColor = getHelperColor('successBadge', 'primary');
const textColor = getHelperColor('alertText', 'secondary');
```
