package routes

import (
	"database/sql"

	"github.com/Joeil92/Planning-Hair/api/controllers"
	repository "github.com/Joeil92/Planning-Hair/repositories"
	"github.com/Joeil92/Planning-Hair/usecases"
	"github.com/gin-gonic/gin"
)

func NewCompanyRouter(group *gin.RouterGroup, db *sql.DB) {
	repository := repository.NewCompanyRepository(db)
	controller := controllers.CompanyController{
		CompanyUseCase: usecases.NewCompanyUsecase(repository),
	}

	group.POST("/company", controller.Create)
}
