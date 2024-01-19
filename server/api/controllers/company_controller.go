package controllers

import (
	"net/http"

	"github.com/Joeil92/Planning-Hair/models"
	"github.com/gin-gonic/gin"
)

type CompanyController struct {
	CompanyUseCase models.CompanyUsecase
}

func (uc *CompanyController) Create(c *gin.Context) {
	var request models.Company

	if err := c.ShouldBind(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.ErrorResponse{Message: err.Error()})
		return
	}

	c.JSON(http.StatusOK, models.SuccessResponse{Message: "ok"})
}
