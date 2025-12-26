package db

// Метод для получения всех маршрутов
func (s *SQLiteRepository) GetAllRoutes() ([]RunningRoute, error) {
	rows, err := s.db.Query("SELECT * FROM runningroutes")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var projects []RunningRoute
	for rows.Next() {
		var project RunningRoute
		if err := rows.Scan(&project.ID, &project.Name,
			&project.Description); err != nil {
			return nil, err
		}
		projects = append(projects, project)
	}
	return projects, nil
}
