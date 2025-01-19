package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New(fiber.Config{
		AppName:       " Tomato Server",
		CaseSensitive: false,
	})

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Tomatoe api up and running 🍅")
	})

	app.Listen(":3000")
}
