package routes

import (
	"github.com/Joeil92/Planning-Hair/api/controllers"
	"github.com/gin-gonic/gin"
)

func NewUserRouter(group *gin.RouterGroup) {
	controller := controllers.UserController{}

	group.POST("/users", controller.Create)
}
