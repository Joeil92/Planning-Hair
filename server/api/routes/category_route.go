package routes

import (
	"database/sql"

	"github.com/Joeil92/Planning-Hair/api/controllers"
	"github.com/Joeil92/Planning-Hair/repositories"
	"github.com/Joeil92/Planning-Hair/usecases"
	"github.com/gin-gonic/gin"
)

func NewCategoryRouter(group *gin.RouterGroup, db *sql.DB) {
	repository := repositories.NewCategoryRepository(db)
	controller := controllers.CategoryController{
		CategoryUseCase: usecases.NewCategoryUsecase(repository),
	}

	group.POST("/categories", controller.Create)
	group.GET("/categories", controller.FindAll)
}
