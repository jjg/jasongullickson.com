package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	currentTime := time.now().Format(time.RFC850)
	fmt.Fprintf(w, currentTime)
}
