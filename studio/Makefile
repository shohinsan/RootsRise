run:
	lsof -i :3333 | awk 'NR!=1 {print $$2}' | xargs -r kill -9
	npm run dev