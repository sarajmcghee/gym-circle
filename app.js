const users = {
  sara: {
    id: "sara",
    name: "Sara",
    goal: "Strength + cardio",
    accent: "#a985ff",
    accentRgb: "169, 133, 255",
    plan: "strengthCardio",
  },
  jeff: {
    id: "jeff",
    name: "Jeff",
    goal: "Core + cardio",
    accent: "#4ed17d",
    accentRgb: "78, 209, 125",
    plan: "coreCardio",
  },
  dawna: {
    id: "dawna",
    name: "Dawna",
    goal: "Strength + cardio",
    accent: "#5ea8ff",
    accentRgb: "94, 168, 255",
    plan: "strengthCardio",
  },
};

const exercises = {
  rowingMachine: {
    name: "Rowing Machine",
    category: "Cardio",
    summary: "A full-body cardio option that warms up legs, back, and core without running.",
    equipment: "Rower",
    steps: [
      "Strap your feet in and sit tall with arms straight.",
      "Push with your legs first, then lean slightly back and pull the handle to your ribs.",
      "Return by sending arms forward, hinging at the hips, then bending your knees.",
    ],
    cues: ["Legs, body, arms on the pull.", "Arms, body, legs on the return.", "Keep the stroke smooth, not rushed."],
    link: "https://www.youtube.com/results?search_query=rowing+machine+beginner+form",
  },
  gobletSquat: {
    name: "Goblet Squat",
    category: "Strength",
    summary: "A beginner-friendly squat pattern using one dumbbell held at chest height.",
    equipment: "Dumbbell",
    steps: [
      "Hold one dumbbell close to your chest.",
      "Sit your hips back and bend your knees.",
      "Stand by pressing your feet into the floor.",
    ],
    cues: ["Chest stays tall.", "Knees track over toes.", "Stop before your back rounds."],
    link: "https://www.youtube.com/results?search_query=goblet+squat+beginner+form",
  },
  dumbbellRdl: {
    name: "Dumbbell Romanian Deadlift",
    category: "Strength",
    summary: "A hip-hinge movement for hamstrings, glutes, and learning safe deadlift mechanics.",
    equipment: "Dumbbells",
    steps: [
      "Hold dumbbells in front of your thighs.",
      "Push your hips back while keeping a soft knee bend.",
      "Return to standing when you feel your hamstrings stretch.",
    ],
    cues: ["Back stays neutral.", "Dumbbells skim your legs.", "Move from the hips, not the waist."],
    link: "https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift+beginner+form",
  },
  stepUps: {
    name: "Step-Ups",
    category: "Strength",
    summary: "A single-leg move that builds leg strength and balance with a bench or box.",
    equipment: "Bench",
    steps: [
      "Place one foot fully on the bench.",
      "Drive through that foot to stand tall.",
      "Step down with control and repeat.",
    ],
    cues: ["Use a lower box first.", "Keep the working knee steady.", "Do not bounce off the back leg."],
    link: "https://www.youtube.com/results?search_query=step+up+exercise+beginner+form",
  },
  chestPress: {
    name: "Dumbbell Chest Press",
    category: "Strength",
    summary: "A pressing movement for chest, shoulders, and triceps using a bench.",
    equipment: "Dumbbells",
    steps: [
      "Lie back with dumbbells near your chest.",
      "Press them up until arms are almost straight.",
      "Lower slowly until elbows are just below bench level.",
    ],
    cues: ["Wrists stay stacked.", "Shoulder blades stay set.", "Use a weight you can control."],
    link: "https://www.youtube.com/results?search_query=dumbbell+chest+press+beginner+form",
  },
  seatedRow: {
    name: "Seated Cable Row",
    category: "Strength",
    summary: "A controlled pulling movement for the upper back and posture.",
    equipment: "Cable machine",
    steps: [
      "Sit tall with arms extended.",
      "Pull the handle toward your ribs.",
      "Return slowly without rounding forward.",
    ],
    cues: ["Lead with elbows.", "Keep shoulders away from ears.", "Pause before releasing."],
    link: "https://www.youtube.com/results?search_query=seated+cable+row+beginner+form",
  },
  shoulderPress: {
    name: "Dumbbell Shoulder Press",
    category: "Strength",
    summary: "An overhead press that trains shoulders, triceps, and trunk control.",
    equipment: "Dumbbells",
    steps: [
      "Hold dumbbells at shoulder height.",
      "Brace your core and press overhead.",
      "Lower slowly back to shoulders.",
    ],
    cues: ["Ribs stay down.", "Press in a smooth line.", "Stop if shoulders pinch."],
    link: "https://www.youtube.com/results?search_query=dumbbell+shoulder+press+beginner+form",
  },
  bikeIntervals: {
    name: "Bike Intervals",
    category: "Cardio",
    summary: "Short higher-effort pushes with easy riding between rounds.",
    equipment: "Stationary bike",
    steps: [
      "Ride easy for two minutes.",
      "Increase speed or resistance for the work interval.",
      "Return to easy riding and repeat.",
    ],
    cues: ["Keep knees tracking forward.", "Stay tall in the seat.", "Hard should still feel controlled."],
    link: "https://www.youtube.com/results?search_query=beginner+stationary+bike+interval+workout",
  },
  deadBug: {
    name: "Dead Bug",
    category: "Core",
    summary: "A core stability exercise that teaches bracing without straining the low back.",
    equipment: "Mat",
    steps: [
      "Lie on your back with arms up and knees bent.",
      "Brace your core and lower opposite arm and leg.",
      "Return to center and switch sides.",
    ],
    cues: ["Low back stays gently pressed down.", "Move slowly.", "Exhale as the leg extends."],
    link: "https://www.youtube.com/results?search_query=dead+bug+exercise+beginner+form",
  },
  plank: {
    name: "Forearm Plank",
    category: "Core",
    summary: "A timed core hold for building trunk endurance and shoulder stability.",
    equipment: "Mat",
    steps: [
      "Set elbows under shoulders.",
      "Step feet back and make a straight line.",
      "Hold while breathing steadily.",
    ],
    cues: ["Squeeze glutes lightly.", "Do not let hips sag.", "Stop before form breaks."],
    link: "https://www.youtube.com/results?search_query=forearm+plank+beginner+form",
  },
  cableWoodChop: {
    name: "Cable Wood Chop",
    category: "Core",
    summary: "A rotational core movement that trains control through the torso.",
    equipment: "Cable machine",
    steps: [
      "Set the cable around chest height.",
      "Stand sideways and hold the handle with both hands.",
      "Rotate through your torso with control.",
    ],
    cues: ["Start light.", "Hips and ribs move together.", "Control the return."],
    link: "https://www.youtube.com/results?search_query=cable+wood+chop+beginner+form",
  },
  birdDog: {
    name: "Bird Dog",
    category: "Core",
    summary: "A low-impact core move that improves balance and back-friendly stability.",
    equipment: "Mat",
    steps: [
      "Start on hands and knees.",
      "Reach opposite arm and leg long.",
      "Pause, return, and switch sides.",
    ],
    cues: ["Keep hips level.", "Reach long, not high.", "Move slowly enough to stay steady."],
    link: "https://www.youtube.com/results?search_query=bird+dog+exercise+beginner+form",
  },
  farmerCarry: {
    name: "Farmer Carry",
    category: "Core",
    summary: "A loaded walk that builds grip, posture, and core strength.",
    equipment: "Dumbbells",
    steps: [
      "Hold dumbbells at your sides.",
      "Stand tall and walk with short steady steps.",
      "Set the weights down carefully after each round.",
    ],
    cues: ["Shoulders down and back.", "Do not lean side to side.", "Choose a clear walking lane."],
    link: "https://www.youtube.com/results?search_query=farmer+carry+beginner+form",
  },
  elliptical: {
    name: "Elliptical",
    category: "Cardio",
    summary: "A low-impact cardio option for warming up or finishing a workout.",
    equipment: "Elliptical",
    steps: [
      "Start with easy resistance.",
      "Keep a steady rhythm with light grip pressure.",
      "Increase effort gradually if your breathing feels settled.",
    ],
    cues: ["Stand tall.", "Keep feet flat.", "Use the handles without pulling hard."],
    link: "https://www.youtube.com/results?search_query=beginner+elliptical+workout",
  },
  sledPush: {
    name: "Sled Push",
    category: "Cardio",
    summary: "A low-skill conditioning move that trains legs, core bracing, and effort control.",
    equipment: "Sled",
    steps: [
      "Load the sled light enough that it moves smoothly.",
      "Lean forward with straight arms or hands on the posts.",
      "Drive through the floor with short, powerful steps.",
    ],
    cues: ["Start lighter than you think.", "Keep your back long.", "Rest enough that every push stays controlled."],
    link: "https://www.youtube.com/results?search_query=sled+push+beginner+form",
  },
};

const plans = {
  strengthCardio: [
    {
      title: "Lower Body + Sled Push",
      subtitle: "Leg strength, glutes, and a powerful cardio finish.",
      blocks: [
        { name: "Warmup", time: "6 min", items: [{ id: "rowingMachine", prescription: "Easy pace" }] },
        {
          name: "Strength",
          time: "30 min",
          items: [
            { id: "gobletSquat", prescription: "3 x 10" },
            { id: "dumbbellRdl", prescription: "3 x 10" },
            { id: "stepUps", prescription: "3 x 8 each leg" },
          ],
        },
        { name: "Cardio", time: "12 min", items: [{ id: "sledPush", prescription: "6-8 pushes / easy walk back" }] },
      ],
    },
    {
      title: "Upper Body + Bike",
      subtitle: "Beginner pressing, pulling, and low-impact intervals.",
      blocks: [
        { name: "Warmup", time: "6 min", items: [{ id: "elliptical", prescription: "Easy pace" }] },
        {
          name: "Strength",
          time: "30 min",
          items: [
            { id: "chestPress", prescription: "3 x 10" },
            { id: "seatedRow", prescription: "3 x 10" },
            { id: "shoulderPress", prescription: "3 x 8" },
          ],
        },
        { name: "Cardio", time: "12 min", items: [{ id: "bikeIntervals", prescription: "45 sec strong / 75 sec easy" }] },
      ],
    },
    {
      title: "Full Body + Row",
      subtitle: "Simple full-body strength with a rowing finisher.",
      blocks: [
        { name: "Warmup", time: "6 min", items: [{ id: "rowingMachine", prescription: "Easy pace" }] },
        {
          name: "Strength",
          time: "32 min",
          items: [
            { id: "gobletSquat", prescription: "3 x 8" },
            { id: "seatedRow", prescription: "3 x 10" },
            { id: "farmerCarry", prescription: "4 x 30 sec" },
          ],
        },
        { name: "Cardio", time: "10 min", items: [{ id: "rowingMachine", prescription: "Steady effort" }] },
      ],
    },
  ],
  coreCardio: [
    {
      title: "Full Body Strength + Core",
      subtitle: "Beginner strength work with core stability and a controlled rowing finish.",
      blocks: [
        { name: "Warmup", time: "6 min", items: [{ id: "elliptical", prescription: "Easy pace" }] },
        {
          name: "Strength",
          time: "22 min",
          items: [
            { id: "gobletSquat", prescription: "3 x 8" },
            { id: "seatedRow", prescription: "3 x 10" },
          ],
        },
        {
          name: "Core",
          time: "12 min",
          items: [
            { id: "deadBug", prescription: "2 x 10 each side" },
            { id: "plank", prescription: "2 x 20-40 sec" },
          ],
        },
        { name: "Cardio", time: "12 min", items: [{ id: "rowingMachine", prescription: "1 min strong / 1 min easy" }] },
      ],
    },
    {
      title: "Upper Body + Bike",
      subtitle: "Pressing, pulling, core control, and bike intervals.",
      blocks: [
        { name: "Warmup", time: "6 min", items: [{ id: "rowingMachine", prescription: "Easy pace" }] },
        {
          name: "Strength",
          time: "30 min",
          items: [
            { id: "chestPress", prescription: "3 x 10" },
            { id: "seatedRow", prescription: "3 x 10" },
            { id: "shoulderPress", prescription: "2 x 8" },
          ],
        },
        {
          name: "Core",
          time: "8 min",
          items: [
            { id: "cableWoodChop", prescription: "2 x 10 each side" },
          ],
        },
        { name: "Cardio", time: "12 min", items: [{ id: "bikeIntervals", prescription: "45 sec strong / 75 sec easy" }] },
      ],
    },
    {
      title: "Lower Body + Carry",
      subtitle: "Leg strength, loaded carries, and low-impact cardio.",
      blocks: [
        { name: "Warmup", time: "5 min", items: [{ id: "elliptical", prescription: "Easy pace" }] },
        {
          name: "Strength",
          time: "28 min",
          items: [
            { id: "dumbbellRdl", prescription: "3 x 10" },
            { id: "stepUps", prescription: "3 x 8 each leg" },
            { id: "farmerCarry", prescription: "4 x 30 sec" },
          ],
        },
        {
          name: "Core",
          time: "8 min",
          items: [
            { id: "birdDog", prescription: "2 x 10 each side" },
          ],
        },
        { name: "Cardio", time: "12 min", items: [{ id: "elliptical", prescription: "Steady effort" }] },
      ],
    },
  ],
};

const state = {
  activeUser: localStorage.getItem("gymCircle.activeUser") || "sara",
  workoutOffset: Number(localStorage.getItem("gymCircle.workoutOffset") || 0),
  view: "today",
};

const profileList = document.querySelector("#profileList");
const tabButtons = document.querySelectorAll(".tab-button");
const views = {
  today: document.querySelector("#todayView"),
  library: document.querySelector("#libraryView"),
  progress: document.querySelector("#progressView"),
};
const dateLabel = document.querySelector("#dateLabel");
const heroTitle = document.querySelector("#heroTitle");
const heroSubtitle = document.querySelector("#heroSubtitle");
const workoutTitle = document.querySelector("#workoutTitle");
const workoutBlocks = document.querySelector("#workoutBlocks");
const workoutLog = document.querySelector("#workoutLog");
const libraryGrid = document.querySelector("#libraryGrid");
const statsGrid = document.querySelector("#statsGrid");
const historyList = document.querySelector("#historyList");
const searchInput = document.querySelector("#searchInput");
const dialog = document.querySelector("#exerciseDialog");
const toast = document.querySelector("#toast");

function applyTheme() {
  const user = users[state.activeUser];
  document.documentElement.style.setProperty("--accent", user.accent);
  document.documentElement.style.setProperty("--accent-rgb", user.accentRgb);
}

function getWorkout() {
  const user = users[state.activeUser];
  const plan = plans[user.plan];
  return plan[state.workoutOffset % plan.length];
}

function getExerciseIdsForWorkout(workout) {
  return workout.blocks.flatMap((block) => block.items.map((item) => item.id));
}

function historyKey() {
  return `gymCircle.history.${state.activeUser}`;
}

function getHistory() {
  return JSON.parse(localStorage.getItem(historyKey()) || "[]");
}

function setHistory(history) {
  localStorage.setItem(historyKey(), JSON.stringify(history));
}

function getPreviousEntry(exerciseId) {
  return getHistory()
    .flatMap((session) => session.entries)
    .filter((entry) => entry.exerciseId === exerciseId)
    .at(-1);
}

function renderProfiles() {
  profileList.innerHTML = Object.values(users)
    .map(
      (user) => `
        <button class="profile-card ${user.id === state.activeUser ? "active" : ""}" data-user="${user.id}" type="button">
          <strong>${user.name}</strong>
          <span>${user.goal}</span>
        </button>
      `
    )
    .join("");

  profileList.querySelectorAll(".profile-card").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeUser = button.dataset.user;
      state.workoutOffset = 0;
      localStorage.setItem("gymCircle.activeUser", state.activeUser);
      localStorage.setItem("gymCircle.workoutOffset", state.workoutOffset);
      render();
    });
  });
}

function renderHero() {
  const user = users[state.activeUser];
  const workout = getWorkout();
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(new Date());

  dateLabel.textContent = today;
  heroTitle.textContent = `${user.name}'s ${workout.title}`;
  heroSubtitle.textContent = workout.subtitle;
  workoutTitle.textContent = workout.title;
}

function renderWorkout() {
  const workout = getWorkout();
  workoutBlocks.innerHTML = workout.blocks
    .map(
      (block) => `
      <article class="workout-block">
        <div class="block-header">
          <h3>${block.name}</h3>
          <span class="time-pill">${block.time}</span>
        </div>
        <div class="exercise-list">
          ${block.items
            .map((item) => {
              const exercise = exercises[item.id];
              return `
                <button class="exercise-card" data-exercise="${item.id}" type="button">
                  <span class="exercise-card-top">
                    <span>
                      <h4>${exercise.name}</h4>
                      <p>${item.prescription}</p>
                    </span>
                    <span class="tag">${exercise.category}</span>
                  </span>
                </button>
              `;
            })
            .join("")}
        </div>
      </article>
    `
    )
    .join("");

  workoutBlocks.querySelectorAll(".exercise-card").forEach((button) => {
    button.addEventListener("click", () => openExercise(button.dataset.exercise));
  });
}

function renderLog() {
  const workout = getWorkout();
  workoutLog.innerHTML = getExerciseIdsForWorkout(workout)
    .map((exerciseId) => {
      const exercise = exercises[exerciseId];
      const previous = getPreviousEntry(exerciseId);
      const previousText = previous
        ? `Previous: ${previous.weight || "bodyweight"} / ${previous.reps || "time"} / ${previous.difficulty || "not rated"}`
        : "Previous: none yet";

      return `
        <div class="log-row" data-exercise="${exerciseId}">
          <strong>${exercise.name}</strong>
          <span class="previous">${previousText}</span>
          <div class="field-grid">
            <label>Weight
              <input name="${exerciseId}-weight" inputmode="decimal" placeholder="lbs" />
            </label>
            <label>Reps/time
              <input name="${exerciseId}-reps" placeholder="10 or 30 sec" />
            </label>
            <label>Feel
              <input name="${exerciseId}-difficulty" placeholder="easy/good/hard" />
            </label>
          </div>
          <label>Notes
            <input name="${exerciseId}-notes" placeholder="Optional" />
          </label>
        </div>
      `;
    })
    .join("");
}

function renderLibrary() {
  const query = searchInput.value.trim().toLowerCase();
  const cards = Object.entries(exercises)
    .filter(([, exercise]) => {
      const haystack = `${exercise.name} ${exercise.category} ${exercise.equipment}`.toLowerCase();
      return haystack.includes(query);
    })
    .map(
      ([id, exercise]) => `
      <button class="library-card" data-exercise="${id}" type="button">
        <h3>${exercise.name}</h3>
        <p>${exercise.summary}</p>
        <div class="library-meta">
          <span class="tag">${exercise.category}</span>
          <span class="tag">${exercise.equipment}</span>
        </div>
      </button>
    `
    );

  libraryGrid.innerHTML = cards.length ? cards.join("") : `<div class="empty-state">No exercises found.</div>`;
  libraryGrid.querySelectorAll(".library-card").forEach((button) => {
    button.addEventListener("click", () => openExercise(button.dataset.exercise));
  });
}

function renderProgress() {
  const history = getHistory();
  const totalWorkouts = history.length;
  const totalEntries = history.reduce((sum, session) => sum + session.entries.length, 0);
  const latest = history.at(-1);

  statsGrid.innerHTML = `
    <article class="stat-card">
      <h3>Workouts</h3>
      <strong>${totalWorkouts}</strong>
      <p>${users[state.activeUser].goal}</p>
    </article>
    <article class="stat-card">
      <h3>Logged sets</h3>
      <strong>${totalEntries}</strong>
      <p>Weights, reps, time, and notes</p>
    </article>
    <article class="stat-card">
      <h3>Latest</h3>
      <strong>${latest ? latest.dateLabel.split(",")[0] : "None"}</strong>
      <p>${latest ? latest.workoutTitle : "Start with today's session"}</p>
    </article>
  `;

  if (!history.length) {
    historyList.innerHTML = `<div class="empty-state">No saved workouts yet.</div>`;
    return;
  }

  historyList.innerHTML = history
    .slice()
    .reverse()
    .map(
      (session) => `
      <article class="history-card">
        <h3>${session.workoutTitle}</h3>
        <p>${session.dateLabel}</p>
        <p>${session.entries
          .map((entry) => {
            const exercise = exercises[entry.exerciseId];
            const detail = [entry.weight && `${entry.weight} lb`, entry.reps, entry.difficulty].filter(Boolean).join(" / ");
            return `${exercise.name}: ${detail || "logged"}`;
          })
          .join("<br>")}</p>
      </article>
    `
    )
    .join("");
}

function openExercise(id) {
  const exercise = exercises[id];
  document.querySelector("#dialogCategory").textContent = `${exercise.category} / ${exercise.equipment}`;
  document.querySelector("#dialogTitle").textContent = exercise.name;
  document.querySelector("#dialogSummary").textContent = exercise.summary;
  document.querySelector("#dialogSteps").innerHTML = exercise.steps.map((step) => `<li>${step}</li>`).join("");
  document.querySelector("#dialogCues").innerHTML = exercise.cues.map((cue) => `<li>${cue}</li>`).join("");
  document.querySelector("#dialogLink").href = exercise.link;
  dialog.showModal();
}

function saveLog() {
  const workout = getWorkout();
  const formData = new FormData(workoutLog);
  const entries = getExerciseIdsForWorkout(workout)
    .map((exerciseId) => ({
      exerciseId,
      weight: formData.get(`${exerciseId}-weight`)?.trim(),
      reps: formData.get(`${exerciseId}-reps`)?.trim(),
      difficulty: formData.get(`${exerciseId}-difficulty`)?.trim(),
      notes: formData.get(`${exerciseId}-notes`)?.trim(),
    }))
    .filter((entry) => entry.weight || entry.reps || entry.difficulty || entry.notes);

  if (!entries.length) {
    showToast("Add at least one log entry.");
    return;
  }

  const dateLabelText = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  setHistory([
    ...getHistory(),
    {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      dateLabel: dateLabelText,
      workoutTitle: workout.title,
      entries,
    },
  ]);

  workoutLog.reset();
  renderLog();
  renderProgress();
  showToast("Workout saved.");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function setView(view) {
  state.view = view;
  Object.entries(views).forEach(([key, element]) => element.classList.toggle("active", key === view));
  tabButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === view));
}

function render() {
  applyTheme();
  renderProfiles();
  renderHero();
  renderWorkout();
  renderLog();
  renderLibrary();
  renderProgress();
}

document.querySelector("#nextWorkoutButton").addEventListener("click", () => {
  state.workoutOffset += 1;
  localStorage.setItem("gymCircle.workoutOffset", state.workoutOffset);
  render();
});

document.querySelector("#saveLogButton").addEventListener("click", saveLog);
document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
document.querySelector("#clearHistoryButton").addEventListener("click", () => {
  setHistory([]);
  renderProgress();
  renderLog();
  showToast("History cleared.");
});

searchInput.addEventListener("input", renderLibrary);
tabButtons.forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));

render();
