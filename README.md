# Examen Final del Curso

## Agenda de Contactos - Aplicación Base

### Descripción del Proyecto
Esta es una aplicación de agenda de contactos desarrollada con React, TypeScript y Vite. La aplicación cuenta con funcionalidades básicas implementadas que servirán como base para el examen final.

### Estructura del Proyecto

```
agenda-de-contactos/
├── src/
│   ├── components/
│   │   ├── ContactForm.tsx      # Formulario para contactos
│   │   ├── ContactList.tsx      # Lista de contactos
│   │   ├── SearchBar.tsx        # Barra de búsqueda
│   │   └── ThemeToggle.tsx      # Toggle de tema
│   ├── types/
│   │   └── Contact.tsx          # Definición de tipos TypeScript
│   ├── App.tsx                  # Componente principal
│   ├── App.css                  # Estilos del componente principal
│   ├── index.css                # Estilos globales
│   └── main.tsx                 # Punto de entrada
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **CSS** - Estilos

### Instrucciones para el Examen

#### 1. Fork del Repositorio
- Realiza un fork de este repositorio a tu cuenta de GitHub
- Clona tu fork localmente

#### 2. Instalación
```bash
cd agenda-de-contactos
npm install
npm run dev
```

#### 3. Desarrollo - Consigna del Examen
Desarrollar las siguientes funcionalidades para un total de **12 puntos**:

**4.4. Agregar un buscador para la sección Contactos y los filtre en tiempo real. (4 pts)**
- Implementar funcionalidad de búsqueda en tiempo real
- Los contactos deben filtrarse mientras el usuario escribe
- Debe buscar por nombre, apellido, email o teléfono

**4.5. Editar contactos existentes, botón de editar cada contacto y poder modificarlo. (4 pts)**
- Agregar botón de editar en cada contacto de la lista
- Permitir modificar todos los campos del contacto
- Actualizar la lista de contactos después de editar

**4.6. Agregar un Tema Claro/Oscuro. Botón para cambiar entre modo claro y oscuro (4 pts)**
- Implementar botón de cambio de tema
- Cambiar entre modo claro y oscuro
- Los cambios deben persistir en la sesión actual

#### 4. Entrega
- Realiza commits frecuentes con mensajes descriptivos
- Sube tus cambios a tu repositorio fork
- Envía el enlace de tu repositorio GitHub al profesor

### Componentes Principales

- **App.tsx**: Componente principal que maneja el estado global
- **ContactForm**: Formulario para gestión de contactos
- **ContactList**: Visualización de la lista de contactos
- **SearchBar**: Campo de búsqueda
- **ThemeToggle**: Botón para cambio de tema

### Notas Importantes

- La aplicación debe mantener su funcionalidad base
- Los cambios deben ser incrementales
- Se valorará la calidad del código y las buenas prácticas
- Asegúrate de probar todas las funcionalidades antes de entregar

### Criterios de Evaluación

- Correcta implementación de las funcionalidades
- Uso apropiado de React y TypeScript
- Calidad y organización del código
- Cumplimiento de los requisitos
- Funcionalidad sin errores

---

**Fecha de entrega**: Según lo indicado por el profesor  
**Formato de entrega**: Link al repositorio GitHub (fork)

¡Éxito en tu examen!