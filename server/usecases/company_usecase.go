package usecases

import (
	"github.com/Joeil92/Planning-Hair/models"
)

type CompanyUseCase struct {
	CompanyRepository models.CompanyRepository
}

func NewCompanyUsecase(repository models.CompanyRepository) models.CompanyUsecase {
	return &CompanyUseCase{CompanyRepository: repository}
}

func (u *CompanyUseCase) Create() {

}
