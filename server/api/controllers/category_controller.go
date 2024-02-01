package controllers

import (
	"net/http"

	"github.com/Joeil92/Planning-Hair/models"
	"github.com/gin-gonic/gin"
)

type CategoryController struct {
	CategoryUseCase models.CategoryUsecase
}

func (cc *CategoryController) Create(c *gin.Context) {
	var request models.Category

	if err := c.ShouldBind(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.ErrorResponse{Message: err.Error()})
		return
	}

	category := models.Category{
		Name:        request.Name,
		Description: request.Description,
	}

	lastInsertId, err := cc.CategoryUseCase.Create(c, &category)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.ErrorResponse{Message: err.Error()})
	}

	category.Id = lastInsertId

	c.JSON(http.StatusOK, models.SuccessResponse{Message: "Category has been successfully created", Data: category})
}

func (cc *CategoryController) FindAll(c *gin.Context) {
	categories, err := cc.CategoryUseCase.FindAll(c)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.ErrorResponse{Message: err.Error()})
	}

	c.JSON(http.StatusOK, categories)
}
