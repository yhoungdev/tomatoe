package enums

type StatusCode int

const (
	StatusContinue           StatusCode = 100
	StatusSwitchingProtocols StatusCode = 101

	StatusOK       StatusCode = 200
	StatusCreated  StatusCode = 201
	StatusAccepted StatusCode = 202

	StatusMovedPermanently StatusCode = 301
	StatusFound            StatusCode = 302

	StatusBadRequest   StatusCode = 400
	StatusUnauthorized StatusCode = 401
	StatusForbidden    StatusCode = 403
	StatusNotFound     StatusCode = 404

	StatusInternalServerError StatusCode = 500
	StatusNotImplemented      StatusCode = 501
	StatusBadGateway          StatusCode = 502
)
