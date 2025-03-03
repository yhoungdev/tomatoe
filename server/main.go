package main

import (
	"github.com/gofiber/fiber/v2"
	"server/controller"
)

func main() {
	app := fiber.New(fiber.Config{
		AppName:       "Tomato Server",
		CaseSensitive: false,
	})

	controller.GoogleOAuth(app)

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Tomato API up and running 🍅")
	})

	app.Listen(":3000")
}
