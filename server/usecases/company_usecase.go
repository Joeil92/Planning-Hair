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

func (u *companyUseCase) Create(c context.Context, company *models.Company) error {
	return u.CompanyRepository.Create(c, company)
}

func (u *companyUseCase) GetByEmail(c context.Context, email string) (models.Company, error) {
	return u.CompanyRepository.GetByEmail(c, email)
}
