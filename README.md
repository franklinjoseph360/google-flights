# ✈️ Google Flights Clone — Franklin Joseph

A responsive React-based Google Flights UI clone using RapidAPI for live flight data. Built with Material UI, modern state management using React Context + Reducer, and Storybook support for reusable component development.

---

## 1. 🚀 How to Run the App

### Step 1: Setup Environment Variables

Create a `.env` file in the root of your project and add your [RapidAPI](https://rapidapi.com/apiheya/api/sky-scrapper) key:

```env
VITE_RAPIDAPI_KEY=your-rapidapi-key-here
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

---

## 2. 📚 Storybook for UI Components

This project supports Storybook to isolate and test UI components.

### Run Storybook:

```bash
npm run storybook
```

Visit: [http://localhost:6006](http://localhost:6006)

---

## 3. 📁 Project Structure

### Structure Overview:

```bash
src/
├── components/
│   ├── common/                  # Shared UI components (e.g., Loader)
│   ├── SearchButton/            # Individual functional components
│   ├── SelectAirportFields/
│   ├── SelectFlightDates/
│   ├── SelectPassengerCount/
│   ├── SelectSeatClass/
│   └── SelectTripType/
│
├── features/
│   └── FlightSearch/
│       ├── components/
│       │   ├── FlightResults/   # Search results (FlightCard, FlightResult)
│       │   └── FlightSearch/    # Main flight form
│       └── context/             # Contexts for search, airport, and results
│
├── services/                    # API service modules
│   ├── airportSearchService.ts
│   └── flightSearchService.ts
│
├── utils/                       # Utility functions and parsers
│   ├── buildFlightSearchQuery.ts
│   └── parseFlightResults.ts
│
├── theme/                       # MUI custom theme
│   └── index.ts
│
├── index.ts                     # App bootstrap
└── types.ts                     # Shared types (optional if extracted)
```

### ✅ Component Breakdown:

- **Common Components**: Used across multiple places (e.g., GlowingLoader).
- **Functional Components**: Domain-specific fields like `SelectTripType`, `SelectSeatClass`.
- **Feature Components**: Grouped under `features/FlightSearch`, includes form + results.
- **Context**: Search state managed in feature-scoped contexts using Context API + Reducer.
- **Utils**: Parsing and query building logic abstracted for cleaner service layer.
- **Theme**: Material UI theme centralization.

---

## 4. 👤 About Me

**Franklin Joseph**  
Senior Full Stack Engineer

- 📞 Phone: +6582010864  
- 📧 Email: franklinjoseph360@gmail.com  
- 🌐 Portfolio: [https://franklinjoseph.dev](https://franklinjoseph.dev)

---

🛫 Built with ❤️ for UI, UX, and performance.