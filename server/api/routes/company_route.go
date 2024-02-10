package routes

import (
	"database/sql"

	"github.com/Joeil92/Planning-Hair/api/controllers"
	"github.com/Joeil92/Planning-Hair/repositories"
	"github.com/Joeil92/Planning-Hair/usecases"
	"github.com/gin-gonic/gin"
)

func NewCompanyRouter(group *gin.RouterGroup, db *sql.DB) {
	repository := repositories.NewCompanyRepository(db)
	controller := controllers.CompanyController{
		CompanyUseCase: usecases.NewCompanyUsecase(repository),
	}

	group.POST("/companies", controller.Create)
	group.GET("/companies", controller.FindAll)
}
