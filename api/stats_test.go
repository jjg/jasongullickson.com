package handler

import "testing"

func TestGetStats(t *testing.T) {

	val := PostFileCount()
	if val != 0 {
		t.Log("Yay")
	} else {
		t.Log("Boo")
		t.Fatal("PostFileCount() should return something")
	}
}
