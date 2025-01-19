package userModel

type User struct {
	ID       string `json:"id" gorm:"primary_key"`
	Email    string `json:"email"`
	Picture  string `json:"picture"`
	Username string `json:"username"`
}
