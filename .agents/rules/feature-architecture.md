# Feature-Based Architecture Rule

## Core Principle
This project follows a Feature-Sliced / Feature-Based architecture. The goal is to maximize encapsulation and scalability by grouping related code by domain/feature, rather than by technical layer.

## Directory Rules
1. **Global/Shared Code**:
   - `src/components/ui/`: Dumb, reusable UI components (Buttons, Inputs).
   - `src/hooks/`: Global hooks used across multiple features (e.g., `useWindowSize`).
   - `src/services/`: Global configuration (e.g., Axios setup in `api.ts`, Storage utilities).
   - `src/types/`: Global types.

2. **Features (`src/features/`)**:
   - Every domain-specific feature (e.g., `auth`, `profile`, `courses`, `student`) MUST have its own folder inside `src/features/`.
   - A Feature folder should contain:
     - `components/`: Smart/Dumb components specific to this feature.
     - `api/`: API service calls specific to this feature.
     - `hooks/`: Custom hooks for this feature's business logic.
     - `types/`: Domain models and types for this feature.
     - `index.ts`: The public API of the feature. All exports to the rest of the application MUST go through this file.

3. **Pages (`src/pages/`)**:
   - Pages are strictly for routing, composing layouts, and tying features together.
   - **Do NOT** put business logic or complex UI components directly in `src/pages/`.
   - Pages should import Feature components (e.g., `import { LoginForm } from '@/features/auth'`).

## Enforcement
- Whenever implementing a new piece of logic, ask yourself: "Does this belong to a specific feature?". If yes, put it in `src/features/[feature]/`.
- Avoid circular dependencies between features. A feature should not import from another feature's internal folders. Always use the public `index.ts` if a feature must expose something to another feature.
