package usecases

import repository "github.com/Joeil92/Planning-Hair/repositories"

type UserUseCase struct {
	userRepository repository.UserRepository
}

func (uu *UserUseCase) Create() {

}

func (uu *UserUseCase) GetByEmail() {
	
}
