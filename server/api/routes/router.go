package routes

import (
	middleware "github.com/Joeil92/Planning-Hair/api/middlewares"
	"github.com/gin-gonic/gin"
)

func Router(gin *gin.Engine) {
	publicRouter := gin.Group("/api")
	// PUBLIC APIs
	NewLoginRouter(publicRouter)
	NewUserRouter(publicRouter)

	protectedRouter := gin.Group("/api")
	protectedRouter.Use(middleware.AuthMiddleware())
	// PRIVATE APIs
}
