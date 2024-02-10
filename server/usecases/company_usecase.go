package usecases

import (
	"context"

	"github.com/Joeil92/Planning-Hair/models"
)

type companyUseCase struct {
	CompanyRepository models.CompanyRepository
}

func NewCompanyUsecase(repository models.CompanyRepository) models.CompanyUsecase {
	return &companyUseCase{CompanyRepository: repository}
}

func (cu *companyUseCase) Create(c context.Context, company *models.Company) (int64, error) {
	return cu.CompanyRepository.Create(c, company)
}
