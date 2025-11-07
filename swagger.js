const getTodos = {
    tags: ['Todos'],
    description: "Obtiene todos los pendientes del sistema",
    operationId: 'getTodos',
    security: [
      {
        bearerAuth: []
      }
    ],
    responses: {
      "200": {
        description: "Lista de pendientes",
        "content": {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                todos: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TodoResponse"
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  const getTodo = {
    tags: ['Todos'],
    description: "Obtiene un pendiente por su ID",
    operationId: 'getTodo',
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "integer"
        },
        description: "ID del pendiente"
      }
    ],
    security: [
      {
        bearerAuth: []
      }
    ],
    responses: {
      "200": {
        description: "Pendiente encontrado",
        "content": {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                todo: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TodoResponse"
                  }
                }
              }
            }
          }
        }
      },
      "404": {
        description: "Pendiente no encontrado",
        "content": {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Pendiente no encontrado"
                }
              }
            }
          }
        }
      }
    }
  };
  
  const postTodos = {
    tags: ['Todos'],
    description: "Crear un nuevo pendiente",
    operationId: 'postTodos',
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/TodoRequest"
          }
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ],
    responses: {
      "200": {
        description: "Pendiente creado exitosamente",
        "content": {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                todo: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TodoResponse"
                  }
                }
              }
            }
          }
        }
      },
      "500": {
        description: "Error al crear el pendiente",
        "content": {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Error al crear el pendiente"
                }
              }
            }
          }
        }
      }
    }
  };

  const updateTodo = {
    tags: ['Todos'],
    description: "Actualizar un pendiente existente",
    operationId: 'updateTodo',
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "integer"
        },
        description: "ID del pendiente a actualizar"
      }
    ],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/TodoRequest"
          }
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ],
    responses: {
      "200": {
        description: "Pendiente actualizado exitosamente",
        "content": {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                todo: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TodoResponse"
                  }
                }
              }
            }
          }
        }
      },
      "404": {
        description: "Pendiente no encontrado",
        "content": {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Pendiente no encontrado"
                }
              }
            }
          }
        }
      },
      "500": {
        description: "Error al actualizar el pendiente",
        "content": {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Error al actualizar el pendiente"
                }
              }
            }
          }
        }
      }
    }
  };

  const deleteTodo = {
    tags: ['Todos'],
    description: "Eliminar un pendiente",
    operationId: 'deleteTodo',
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "integer"
        },
        description: "ID del pendiente a eliminar"
      }
    ],
    security: [
      {
        bearerAuth: []
      }
    ],
    responses: {
      "200": {
        description: "Pendiente eliminado exitosamente",
        "content": {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Pendiente eliminado correctamente"
                },
                todo: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TodoResponse"
                  }
                }
              }
            }
          }
        }
      },
      "404": {
        description: "Pendiente no encontrado",
        "content": {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Pendiente no encontrado"
                }
              }
            }
          }
        }
      },
      "500": {
        description: "Error al eliminar el pendiente",
        "content": {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Error al eliminar el pendiente"
                }
              }
            }
          }
        }
      }
    }
  };
  
  const swaggerDocument = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API de Pendientes - Express con Swagger",
        version: "1.0.0",
        description: "API REST para gestionar pendientes (tareas) con Express y PostgreSQL",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html"
        },
        contact: {
          name: "API Pendientes",
          url: "https://tec.mx",
          email: "info@tec.mx"
        }
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Servidor de desarrollo - API de Pendientes"
        }
      ],
      tags: [
        {
          name: 'Todos',
          description: 'Endpoints para gestionar pendientes'
        }
      ],
      paths: {
        "/pendientes": {
          "get": getTodos
        },
        "/pendientes/{id}": {
          "get": getTodo
        },
        "/pendientes/add": {
          "post": postTodos
        },
        "/pendientes/update/{id}": {
          "put": updateTodo
        },
        "/pendientes/delete/{id}": {
          "delete": deleteTodo
        }
      },
      components: {
        schemas: {
          TodoRequest: {
            type: "object",
            required: [
              "nombre",
              "fecha"
            ],
            properties: {
              nombre: {
                type: "string",
                description: "Nombre del pendiente",
                example: "Completar reporte mensual"
              },
              descripcion: {
                type: "string",
                description: "Descripción detallada del pendiente",
                example: "Elaborar y enviar el reporte de actividades del mes"
              },
              fecha: {
                type: "string",
                format: "date",
                description: "Fecha del pendiente (YYYY-MM-DD)",
                example: "2025-11-15"
              }
            }
          },
          TodoResponse: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                description: "ID único del pendiente",
                example: 1
              },
              nombre: {
                type: "string",
                description: "Nombre del pendiente",
                example: "Completar reporte mensual"
              },
              descripcion: {
                type: "string",
                description: "Descripción detallada del pendiente",
                example: "Elaborar y enviar el reporte de actividades del mes"
              },
              fecha: {
                type: "string",
                format: "date",
                description: "Fecha del pendiente (YYYY-MM-DD)",
                example: "2025-11-15"
              }
            }
          }
        },
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT"
          }
        }
      }
    },
    apis: ["./routes/todos.js"]
  };
  
  module.exports = { swaggerDocument };
