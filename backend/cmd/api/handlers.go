package main

import (
	"fmt"

	"github.com/yurikrylov/mykld.ru/backend/db"
)

// Функция для получения всех проектов
func getAllRoutes(rep *db.SQLiteRepository) ([]db.RunningRoute, error) {
	runningRoutes, err := rep.GetAllRoutes()
	if err != nil {

		return nil, err
	}
	if len(runningRoutes) == 0 {
		fmt.Println("You don't have any routes")
	}
	return runningRoutes, nil

}
