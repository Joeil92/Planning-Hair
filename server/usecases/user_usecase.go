package usecases

import (
	"context"

	"github.com/Joeil92/Planning-Hair/models"
)

type userUseCase struct {
	UserRepository models.UserRepository
}

func NewUserUsecase(repository models.UserRepository) models.UserUsecase {
	return &userUseCase{UserRepository: repository}
}

func (u *userUseCase) Create() {

}

func (u *userUseCase) GetByEmail(c context.Context, email string) (models.User, error) {
	return u.UserRepository.GetByEmail(c, email)
}
