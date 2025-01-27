package config

import "golang.org/x/oauth2"

var OAuthConfig = &oauth2.Config{
	RedirectURL: "/oauth/callback",
}
