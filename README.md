# RootsRise

### Overview

RootsRise is an ongoing and collaborative effort to map out the rich history of the Abdulkhamidov family, capturing generations, relationships, and significant milestones. This family tree project aims to create a visual representation of our heritage, fostering a deeper understanding of our roots and the stories that bind us together.

### Example JSON supported at the moment of the project

```
{
	id: 'A1A',
	name: 'Name',
	image: Icons.default, // restricted to default at the moment
	description?: string | string[]; // Biography(optional)
	birth?: string; // Dateformat: January 1, 2024
	death?: string; // RIP
	dependant?: string; // top level parent
	children?: Base[]; // low level child
},
```
### ID Belongings

- `A1A` - Abdulkhamidov
- `B1A` - Khamidov
- `C1A` - Sharipov
- `D1A` - Valiev

### Roadmap
- [x] Build family tree upon family related data
- [ ] Improve linking to another person
* Sometimes 1 family can part of 2 different IDs mentioned above
- [ ] Integrate Database Systems
* Clean up project from json files
- [ ] Consider simple Admin panel if CRUD enabled
* Reduces creating excessive json files
* Allows non-tech people to perform CRUD
- [ ] Implement i18n internationalization
* Allow users to browse with a language of choice
