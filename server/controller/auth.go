package controller

import (
	"github.com/joho/godotenv"
	"github.com/markbates/goth"
	"github.com/markbates/goth/providers/google"
	"log"
	"os"
)

func GoogleOAuth() {

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	ClientId := os.Getenv("GOOGLE_CLIENT_ID")
	ClientSecret := os.Getenv("GOOGLE_CLIENT_SECRET")

	if ClientId == "" || ClientSecret == "" {
		log.Fatalf("GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET not set in environment variables")
	}

	goth.UseProviders(
		google.New(
			ClientId,
			ClientSecret,
			"http://127.0.0.1:3000/",
		),
	)
}
