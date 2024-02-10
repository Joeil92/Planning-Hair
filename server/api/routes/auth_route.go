package routes

import (
	"database/sql"

	"github.com/Joeil92/Planning-Hair/api/controllers"
	"github.com/Joeil92/Planning-Hair/repositories"
	"github.com/Joeil92/Planning-Hair/usecases"
	"github.com/gin-gonic/gin"
)

func NewAuthRouter(group *gin.RouterGroup, db *sql.DB) {
	repository := repositories.NewUserRepository(db)
	controller := controllers.AuthController{
		UserUsecase: usecases.NewUserUsecase(repository),
	}

	group.POST("auth", controller.Auth)
}
