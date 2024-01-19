package routes

import (
	"database/sql"

	middleware "github.com/Joeil92/Planning-Hair/api/middlewares"
	"github.com/gin-gonic/gin"
)

func Router(gin *gin.Engine, db *sql.DB) {
	publicRouter := gin.Group("/api")
	// PUBLIC APIs
	NewAuthRouter(publicRouter, db)
	NewUserRouter(publicRouter, db)

	protectedRouter := gin.Group("/api")
	protectedRouter.Use(middleware.AuthMiddleware())
	// PRIVATE APIs
}
