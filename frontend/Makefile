run:
	lsof -i :5173 | awk 'NR!=1 {print $$2}' | xargs -r kill -9
	npm run dev