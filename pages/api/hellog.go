package handler

import (
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.fPrintf(w, "hola")
}
