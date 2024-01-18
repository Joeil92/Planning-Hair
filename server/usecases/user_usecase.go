package usecases

import (
	"context"

	"github.com/Joeil92/Planning-Hair/models"
)

type UserUseCase struct {
	userRepository models.UserRepository
}

func (uu *UserUseCase) Create() {

}

func (uu *UserUseCase) GetByEmail(c context.Context, email string) (models.User, error) {
	return uu.userRepository.GetByEmail(c, email)
}
