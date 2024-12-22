### [Live Site](https://labsxd-23e-dev-ed.develop.my.site.com/MovieSearch/)
# 🎬 Buscador de Películas LWC

## 📝 Descripción
<img src="https://i.ibb.co/L1VqhP0/movie-Search.png" align="right" alt="img" width="50%" height="auto" border="0">
Este proyecto es una aplicación web de búsqueda de películas desarrollada con Lightning Web Components (LWC) de Salesforce. La aplicación permite a los usuarios buscar películas utilizando la API de OMDB (Open Movie Database). A través de una interfaz intuitiva, los usuarios pueden explorar información detallada sobre películas, series y episodios.

### ✨ Características Principales
- 🔍 Búsqueda en tiempo real de películas y series
- 🎯 Integración con la API pública de OMDB
- 📱 Interfaz responsive y amigable
- 🔄 Actualización dinámica de resultados
- 🎨 Diseño moderno y atractivo
- 📺 Visualización detallada de información de cada título

## 🛠️ Tecnologías Utilizadas
- Lightning Web Components (LWC)
- JavaScript
- HTML5
- CSS3
- OMDB API

## 🔧 Componentes del Proyecto

### Componentes Lightning Web
| Componente | Descripción |
|------------|-------------|
| movieSearch | Componente principal de búsqueda con filtros |
| movieCard | Tarjeta individual para mostrar cada resultado |
| movieDetail | Vista detallada de la película seleccionada |

### Configuración de Seguridad
| Componente | Tipo | Descripción |
|------------|------|-------------|
| movieAPI | Remote Site Settings | Permite conexión con API OMDB |
| movieImage | Remote Site Settings | Permite carga de imágenes |
| movieAPI | Trusted URLs | URLs confiables para API |
| movieImage | Trusted URLs | URLs confiables para imágenes |

### Comunicación entre Componentes
| Componente | Tipo | Descripción |
|------------|------|-------------|
| movieChannel | Message Channel | Canal de comunicación entre componentes |

## 📚 Aprendizajes del Proyecto

### Conceptos Técnicos
- Uso de Fetch API para llamadas HTTP
- Comunicación padre-hijo mediante @api decorators
- Comunicación hijo-padre usando eventos personalizados
- Comunicación entre componentes independientes con Message Channel
- Implementación de CSS externo
- Uso de componentes en sitios LWR

### Patrones de Desarrollo
- Renderizado condicional
- Iteración en plantillas
- Métodos getter
- Manejo de estados
- Comunicación entre componentes

## 🚀 Instalación y Configuración

1. **Configuración del Entorno**
   ```bash
   # Clonar el repositorio
   git clone [URL_DEL_REPOSITORIO]

   # Navegar al directorio del proyecto
   cd movie-search-lwc
   ```

2. **Configuración de Remote Site Settings**
   - Agregar `movieAPI` para el dominio de OMDB API
   - Agregar `movieImage` para el dominio de imágenes

3. **Despliegue de Componentes**
   - Desplegar todos los componentes LWC al org
   - Verificar la configuración de Message Channel

## 💡 Uso

1. **Búsqueda de Películas**
   - Ingresar el título en el campo de búsqueda
   - Seleccionar el tipo de contenido (película, serie, episodio)
   - Los resultados se mostrarán automáticamente

2. **Visualización de Detalles**
   - Hacer clic en cualquier tarjeta para ver información detallada
   - La información se muestra en el panel lateral

## 👥 Contribución
Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


## 🤝 Contacto
Cristian Soria - soriacristian.dev@gmail.com

Portafolio: https://crissoria.netlify.app/

Link del proyecto: https://labsxd-23e-dev-ed.develop.my.site.com/MovieSearch/


---
⭐️ Si este proyecto te gustó, no olvides darle una estrella en GitHub!
