package usecases

import (
	"context"

	"github.com/Joeil92/Planning-Hair/models"
)

type categoryUseCase struct {
	CategoryRepository models.CategoryRepository
}

func NewCategoryUsecase(repository models.CategoryRepository) models.CategoryUsecase {
	return &categoryUseCase{CategoryRepository: repository}
}

func (cu *categoryUseCase) Create(c context.Context, category *models.Category) error {
	return cu.CategoryRepository.Create(c, category)
}

func (cu *categoryUseCase) FindAll(c context.Context) ([]models.Category, error) {
	return cu.CategoryRepository.FindAll(c)
}
