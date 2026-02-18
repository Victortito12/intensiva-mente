const modulesData = [
  {
    id: "modulo1",
    title: "Modulo 1 - Fundamentos",
    lessons: [
      {
        id: "m1a1",
        title: "Boas-vindas e visao geral da mentoria",
        duration: "12 min",
        thumb: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=V2oD8yRQsTU",
        description: "Nesta aula voce entende a visao geral da mentoria, o passo a passo e como tirar o maximo proveito dos encontros e materiais.",
      },
      {
        id: "m1a2",
        title: "Mentalidade e posicionamento",
        duration: "18 min",
        thumb: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=M7FIvfx5J10",
        description: "Trabalhamos a mentalidade certa para voce se posicionar com seguranca e autoridade no seu mercado.",
      },
      {
        id: "m1a3",
        title: "Definindo objetivos claros",
        duration: "15 min",
        thumb: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=M7FIvfx5J10",
        description: "Voce vai definir metas especificas e mensuraveis para os proximos meses, alinhadas com a sua realidade.",
      },
      {
        id: "m1a4",
        title: "Plano de acao inicial",
        duration: "20 min",
        thumb: "https://images.pexels.com/photos/1181532/pexels-photo-1181532.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=M7FIvfx5J10",
        description: "Transformamos seus objetivos em um plano pratico, organizado em acoes semanais e prioridades.",
      },
    ],
  },
  {
    id: "modulo2",
    title: "Modulo 2 - Estrategias",
    lessons: [
      {
        id: "m2a1",
        title: "Estrutura da sua oferta",
        duration: "22 min",
        thumb: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=M7FIvfx5J10",
        description: "Aqui voce monta ou ajusta a sua oferta para que ela seja clara, desejada e facil de vender.",
      },
      {
        id: "m2a2",
        title: "Atracao de clientes certos",
        duration: "19 min",
        thumb: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=M7FIvfx5J10",
        description: "Definimos estrategias praticas para atrair pessoas alinhadas, que realmente valorizem o que voce oferece.",
      },
      {
        id: "m2a3",
        title: "Conteudo que converte",
        duration: "25 min",
        thumb: "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=M7FIvfx5J10",
        description: "Voce aprende como criar conteudos que geram conexao, autoridade e movimento em direcao a compra.",
      },
      {
        id: "m2a4",
        title: "Organizando sua rotina",
        duration: "17 min",
        thumb: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=M7FIvfx5J10",
        description: "Organizamos sua rotina para que voce consiga executar tudo sem se sobrecarregar.",
      },
    ],
  },
  {
    id: "modulo3",
    title: "Modulo 3 - Escala e Sustentacao",
    lessons: [
      {
        id: "m3a1",
        title: "Entregando no alto nivel",
        duration: "21 min",
        thumb: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=M7FIvfx5J10",
        description: "Voce aprende como manter a qualidade da entrega mesmo aumentando o numero de clientes.",
      },
      {
        id: "m3a2",
        title: "Sistema de suporte ao cliente",
        duration: "16 min",
        thumb: "https://images.pexels.com/photos/1181716/pexels-photo-1181716.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=M7FIvfx5J10",
        description: "Criamos uma estrutura de suporte que reduz duvidas repetidas e aumenta a satisfacao.",
      },
      {
        id: "m3a3",
        title: "Escalando com seguranca",
        duration: "24 min",
        thumb: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=M7FIvfx5J10",
        description: "Voce ve formas de crescer de forma sustentavel, sem perder a mao no financeiro e na entrega.",
      },
      {
        id: "m3a4",
        title: "Proximos passos e proximos niveis",
        duration: "14 min",
        thumb: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "https://www.youtube.com/watch?v=M7FIvfx5J10",
        description: "Encerramos com clareza de proximos passos para voce seguir crescendo depois da mentoria.",
      },
    ],
  },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function openLesson(moduleId, lessonId) {
  localStorage.setItem("currentLesson", JSON.stringify({ moduleId, lessonId }));
  window.location.href = "player.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const catalogSection = document.getElementById("catalog");
  const userEmailLabel = document.getElementById("userEmailLabel");
  const logoutBtn = document.getElementById("logoutBtn");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Preencha e-mail e senha.");
        return;
      }

      localStorage.setItem("userEmail", email);
      window.location.href = "dashboard.html";
    });
  }

  const userEmail = localStorage.getItem("userEmail");

  const isDashboardOrInternal =
    window.location.pathname.includes("dashboard.html") ||
    window.location.pathname.includes("player.html") ||
    window.location.pathname.includes("profile.html");

  if (isDashboardOrInternal && !userEmail) {
    window.location.href = "index.html";
    return;
  }

  if (userEmailLabel && userEmail) {
    userEmailLabel.textContent = userEmail;
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("userEmail");
      window.location.href = "index.html";
    });
  }

  if (catalogSection) {
    modulesData.forEach((module) => {
      const moduleRow = document.createElement("div");
      moduleRow.className = "module-row";
      moduleRow.id = module.id;

      const title = document.createElement("h2");
      title.className = "module-title";
      title.textContent = module.title;

      const lessonList = document.createElement("div");
      lessonList.className = "lesson-list";

      module.lessons.forEach((lesson) => {
        const card = document.createElement("div");
        card.className = "lesson-card";
        card.onclick = () => openLesson(module.id, lesson.id);

        const thumb = document.createElement("div");
        thumb.className = "lesson-thumb";
        thumb.style.backgroundImage = `url('${lesson.thumb}')`;

        const info = document.createElement("div");
        info.className = "lesson-info";

        const titleEl = document.createElement("div");
        titleEl.className = "lesson-title";
        titleEl.textContent = lesson.title;

        const metaEl = document.createElement("div");
        metaEl.className = "lesson-meta";
        metaEl.textContent = lesson.duration;

        info.appendChild(titleEl);
        info.appendChild(metaEl);

        card.appendChild(thumb);
        card.appendChild(info);

        lessonList.appendChild(card);
      });

      moduleRow.appendChild(title);
      moduleRow.appendChild(lessonList);
      catalogSection.appendChild(moduleRow);
    });
  }

  const lessonTitleEl = document.getElementById("lessonTitle");
  const lessonDescriptionEl = document.getElementById("lessonDescription");
  const relatedLessonsEl = document.getElementById("relatedLessons");
  const markCompletedBtn = document.getElementById("markCompletedBtn");
  const backToDashboardBtn = document.getElementById("backToDashboardBtn");
  const openOnYoutubeBtn = document.getElementById("openOnYoutubeBtn");

  if (lessonTitleEl && lessonDescriptionEl && openOnYoutubeBtn) {
    const currentLessonData = localStorage.getItem("currentLesson");

    if (!currentLessonData) {
      window.location.href = "dashboard.html";
      return;
    }

    const { moduleId, lessonId } = JSON.parse(currentLessonData);

    const currentModule = modulesData.find((m) => m.id === moduleId);
    const currentLesson = currentModule ? currentModule.lessons.find((l) => l.id === lessonId) : null;

    if (!currentModule || !currentLesson) {
      window.location.href = "dashboard.html";
      return;
    }

    lessonTitleEl.textContent = currentLesson.title;
    lessonDescriptionEl.textContent = currentLesson.description;

    openOnYoutubeBtn.onclick = () => {
      window.open(currentLesson.videoUrl, "_blank");
    };

    if (relatedLessonsEl) {
      relatedLessonsEl.innerHTML = "";
      currentModule.lessons.filter((l) => l.id !== currentLesson.id).forEach((lesson) => {
        const item = document.createElement("div");
        item.className = "related-lesson-item";
        item.onclick = () => openLesson(currentModule.id, lesson.id);

        const thumb = document.createElement("div");
        thumb.className = "related-lesson-thumb";
        thumb.style.backgroundImage = `url('${lesson.thumb}')`;

        const info = document.createElement("div");
        info.className = "related-lesson-info";

        const title = document.createElement("div");
        title.className = "related-lesson-title";
        title.textContent = lesson.title;

        const meta = document.createElement("div");
        meta.className = "related-lesson-meta";
        meta.textContent = lesson.duration;

        info.appendChild(title);
        info.appendChild(meta);
        item.appendChild(thumb);
        item.appendChild(info);

        relatedLessonsEl.appendChild(item);
      });
    }

    const completedKey = "completedLessons";
    let completedLessons = JSON.parse(localStorage.getItem(completedKey) || "[]");

    function updateCompletedState() {
      const isCompleted = completedLessons.some((entry) => entry.moduleId === moduleId && entry.lessonId === lessonId);
      if (isCompleted) {
        markCompletedBtn.textContent = "Aula concluida";
        markCompletedBtn.disabled = true;
        markCompletedBtn.classList.add("secondary-btn");
        markCompletedBtn.classList.remove("primary-btn");
      }
    }

    if (markCompletedBtn) {
      markCompletedBtn.addEventListener("click", () => {
        completedLessons.push({ moduleId, lessonId });
        localStorage.setItem(completedKey, JSON.stringify(completedLessons));
        updateCompletedState();
      });
    }

    updateCompletedState();

    if (backToDashboardBtn) {
      backToDashboardBtn.addEventListener("click", () => {
        window.location.href = "dashboard.html";
      });
    }
  }

  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");
  const completedList = document.getElementById("completedList");

  if (progressFill && progressText && completedList) {
    const completedKey = "completedLessons";
    let completedLessons = JSON.parse(localStorage.getItem(completedKey) || "[]");

    let totalLessons = 0;
    modulesData.forEach((module) => {
      totalLessons += module.lessons.length;
    });

    const completedCount = completedLessons.length;
    const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

    progressFill.style.width = progressPercent + "%";
    progressText.textContent = progressPercent + "% concluido (" + completedCount + " de " + totalLessons + " aulas)";

    if (completedCount === 0) {
      completedList.innerHTML = '<p style="color: #aaa;">Nenhuma aula concluida ainda.</p>';
    } else {
      completedList.innerHTML = "";
      completedLessons.forEach((entry) => {
        const module = modulesData.find((m) => m.id === entry.moduleId);
        const lesson = module ? module.lessons.find((l) => l.id === entry.lessonId) : null;
        if (lesson) {
          const item = document.createElement("div");
          item.className = "completed-item";
          item.textContent = lesson.title;
          completedList.appendChild(item);
        }
      });
    }
  }
});
