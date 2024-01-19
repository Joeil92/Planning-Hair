package routes

import (
	"database/sql"

	"github.com/Joeil92/Planning-Hair/api/controllers"
	repository "github.com/Joeil92/Planning-Hair/repositories"
	"github.com/Joeil92/Planning-Hair/usecases"
	"github.com/gin-gonic/gin"
)

func NewUserRouter(group *gin.RouterGroup, db *sql.DB) {
	repository := repository.NewUserRepository(db)
	controller := controllers.UserController{
		UserUseCase: usecases.NewUserUsecase(repository),
	}

	group.POST("/users", controller.Create)
}
