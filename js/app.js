/**
 * Food App mockup — hash router + page renderers (UI only).
 */

(function () {
  const icon = (name) => ICONS[name] || "";

  let nextCategoryId = 100;
  let nextQuestionId = 1000;

  function starsHtml(count) {
    let html = '<span class="stars" aria-label="' + count + ' stars">';
    for (let i = 1; i <= 5; i++) {
      const cls = i <= count ? "" : ' class="empty"';
      html +=
        '<svg' +
        cls +
        ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    }
    html += "</span>";
    return html;
  }

  function starPickerHtml(questionId) {
    let html = '<div class="star-picker" data-star-picker data-question-id="' + questionId + '">';
    for (let i = 1; i <= 5; i++) {
      html +=
        '<button type="button" class="star-btn" data-value="' +
        i +
        '" aria-label="' +
        i +
        ' stars">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' +
        "</button>";
    }
    html += "</div>";
    return html;
  }

  function paginationHtml(itemLabel, total) {
    return (
      '<div class="pagination">' +
      "<span>Showing 1 to " +
      total +
      " of " +
      total +
      " " +
      itemLabel +
      "</span>" +
      '<div class="pagination-right">' +
      "<span>Page 1 of 1</span>" +
      '<select class="select" style="min-width:4.5rem;height:2rem" disabled><option>10</option></select>' +
      '<div class="page-btns">' +
      "<button disabled>«</button>" +
      "<button disabled>‹</button>" +
      '<button class="active">1</button>' +
      "<button disabled>›</button>" +
      "<button disabled>»</button>" +
      "</div></div></div>"
    );
  }

  function searchFilter(placeholder, extraControls) {
    return (
      '<div class="filters">' +
      '<div class="search-wrap">' +
      icon("search") +
      '<input type="text" placeholder="' +
      placeholder +
      '" readonly />' +
      "</div>" +
      (extraControls || "") +
      "</div>"
    );
  }

  function actionsMenu(extraItems) {
    return (
      '<div class="dropdown" data-dropdown>' +
      '<button type="button" class="btn btn-ghost" data-dropdown-toggle aria-label="Actions">' +
      icon("more-vertical") +
      "</button>" +
      '<div class="dropdown-menu">' +
      '<button type="button" class="dropdown-item">' +
      icon("edit") +
      " Edit</button>" +
      '<button type="button" class="dropdown-item danger">' +
      icon("trash") +
      " Delete</button>" +
      '<button type="button" class="dropdown-item" data-view>' +
      icon("eye") +
      " View</button>" +
      (extraItems || "") +
      "</div></div>"
    );
  }

  function toggleHtml(enabled, questionId) {
    return (
      '<label class="toggle" title="' +
      (enabled ? "Enabled" : "Disabled") +
      '">' +
      '<input type="checkbox" data-toggle-question="' +
      questionId +
      '"' +
      (enabled ? " checked" : "") +
      " />" +
      '<span class="toggle-track"></span>' +
      '<span class="toggle-label">' +
      (enabled ? "Enabled" : "Disabled") +
      "</span>" +
      "</label>"
    );
  }

  function renderDashboard() {
    return (
      '<div class="page">' +
      '<div class="page-header"><h1 class="page-title">Dashboard</h1></div>' +
      '<div class="dash-grid">' +
      '<div class="dash-card"><div class="label">Orders today</div><div class="value">24</div></div>' +
      '<div class="dash-card"><div class="label">Active items</div><div class="value">128</div></div>' +
      '<div class="dash-card"><div class="label">Feedback this week</div><div class="value">18</div></div>' +
      '<div class="dash-card"><div class="label">Avg. rating</div><div class="value">4.2</div></div>' +
      "</div>" +
      '<p style="margin-top:1rem;font-size:0.875rem;color:var(--muted-foreground)">UI mockup only — no live data or actions.</p>' +
      "</div>"
    );
  }

  function renderPlaceholder(title) {
    return (
      '<div class="page">' +
      '<div class="page-header"><h1 class="page-title">' +
      title +
      "</h1></div>" +
      '<div class="placeholder">' +
      "<h2>" +
      title +
      "</h2>" +
      "<p>This page is a layout placeholder. Functionality is not implemented in the mockup.</p>" +
      "</div></div>"
    );
  }

  function renderItems() {
    const rows = MOCK_ITEMS.map(function (item) {
      return (
        "<tr>" +
        "<td>" +
        item.sn +
        "</td>" +
        "<td>" +
        item.name +
        "</td>" +
        "<td>" +
        item.group +
        "</td>" +
        "<td>" +
        item.branch +
        "</td>" +
        "<td>Rs. " +
        item.price +
        "</td>" +
        "<td>" +
        (item.active
          ? '<span class="badge badge-active">Active</span>'
          : '<span class="badge badge-inactive">Inactive</span>') +
        "</td>" +
        '<td class="actions-cell" onclick="event.stopPropagation()">' +
        actionsMenu() +
        "</td></tr>"
      );
    }).join("");

    return (
      '<div class="page">' +
      '<div class="page-header">' +
      '<h1 class="page-title">Items</h1>' +
      '<button type="button" class="btn btn-primary">' +
      icon("plus") +
      " Add Item</button>" +
      "</div>" +
      searchFilter(
        "Search items by name, group, or branch...",
        '<select class="select" disabled><option>All branches</option></select>'
      ) +
      '<div class="list-region"><table class="table">' +
      "<thead><tr>" +
      "<th>SN</th><th>Name</th><th>Group</th><th>Branch</th><th>Price</th><th>Status</th><th class=\"actions-cell\">Actions</th>" +
      "</tr></thead><tbody>" +
      rows +
      "</tbody></table></div>" +
      paginationHtml("items", MOCK_ITEMS.length) +
      "</div>"
    );
  }

  function renderCategoryCard(cat) {
    const enabledCount = cat.questions.filter(function (q) {
      return q.enabled;
    }).length;
    const questions = cat.questions
      .slice()
      .reverse()
      .map(function (q) {
        return (
          '<div class="question-row' +
          (q.enabled ? "" : " is-disabled") +
          '" data-question-row="' +
          q.id +
          '">' +
          '<p class="question-text">' +
          q.text +
          "</p>" +
          toggleHtml(q.enabled, q.id) +
          "</div>"
        );
      })
      .join("");

    return (
      '<section class="category-card" data-category-id="' +
      cat.id +
      '">' +
      '<div class="category-header">' +
      "<div>" +
      '<h2 class="category-name">' +
      cat.name +
      "</h2>" +
      '<p class="category-meta">' +
      cat.questions.length +
      " questions · " +
      enabledCount +
      " enabled</p>" +
      "</div>" +
      "</div>" +
      '<div class="question-list">' +
      (questions ||
        '<p class="empty-hint">No questions yet. Add one below.</p>') +
      "</div>" +
      '<div class="add-question-row">' +
      '<input type="text" class="field-input" data-new-question-input placeholder="Add a star-rating question…" />' +
      '<button type="button" class="btn btn-outline" data-add-question="' +
      cat.id +
      '">' +
      icon("plus") +
      " Add</button>" +
      "</div>" +
      "</section>"
    );
  }

  function renderQuestions() {
    const cards = MOCK_SERVICE_CATEGORIES.slice()
      .reverse()
      .map(renderCategoryCard)
      .join("");
    return (
      '<div class="page page-scroll">' +
      '<div class="page-header">' +
      "<div>" +
      '<h1 class="page-title">Generate Questions</h1>' +
      '<p class="page-subtitle">Create service categories and star-rating questions. Questions cannot be deleted (kept for past feedback).</p>' +
      "</div>" +
      '<button type="button" class="btn btn-primary" id="btn-add-category">' +
      icon("plus") +
      " Add Service Category</button>" +
      "</div>" +
      '<div class="filters">' +
      '<div class="search-wrap">' +
      icon("search") +
      '<input type="text" placeholder="Search service category or question..." />' +
      "</div>" +
      '<select class="select">' +
      "<option>All questions</option>" +
      "<option>Enabled only</option>" +
      "<option>Disabled only</option>" +
      "</select>" +
      "</div>" +
      '<div class="category-stack" id="category-stack">' +
      cards +
      "</div>" +
      "</div>"
    );
  }

  function openAddCategoryModal() {
    const backdrop = document.getElementById("modal-backdrop");
    backdrop.innerHTML =
      '<div class="modal" role="dialog" aria-modal="true">' +
      '<div class="modal-header">' +
      "<h2>Add Service Category</h2>" +
      '<button type="button" class="btn btn-ghost" data-close-modal aria-label="Close">' +
      icon("x") +
      "</button>" +
      "</div>" +
      '<div class="modal-body">' +
      '<label class="field">' +
      "<span>Category name <em>*</em></span>" +
      '<input class="field-input" type="text" id="new-category-name" placeholder="e.g. Catering, Spa, Conference" autofocus />' +
      "</label>" +
      '<p class="field-hint">Service categories appear on the customer feedback form for selection.</p>' +
      "</div>" +
      '<div class="modal-footer">' +
      '<button type="button" class="btn btn-outline" data-close-modal>Cancel</button>' +
      '<button type="button" class="btn btn-primary" id="btn-confirm-add-category">' +
      icon("plus") +
      " Add Category</button>" +
      "</div></div>";

    backdrop.classList.add("open");

    const input = document.getElementById("new-category-name");
    const confirmBtn = document.getElementById("btn-confirm-add-category");

    function submitCategory() {
      const name = (input.value || "").trim();
      if (!name) {
        input.focus();
        input.classList.add("field-error");
        return;
      }
      const cat = {
        id: "svc-custom-" + nextCategoryId++,
        name: name,
        questions: [],
      };
      MOCK_SERVICE_CATEGORIES.push(cat);
      const stack = document.getElementById("category-stack");
      if (stack) {
        stack.insertAdjacentHTML("afterbegin", renderCategoryCard(cat));
        bindCategoryCard(stack.querySelector('[data-category-id="' + cat.id + '"]'));
      }
      closeModal();
    }

    if (confirmBtn) confirmBtn.onclick = submitCategory;
    if (input) {
      input.oninput = function () {
        input.classList.remove("field-error");
      };
      input.onkeydown = function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          submitCategory();
        }
      };
      setTimeout(function () {
        input.focus();
      }, 50);
    }
  }

  function renderCollectedFeedback() {
    const rows = MOCK_FEEDBACK.map(function (f) {
      return (
        '<tr data-feedback-id="' +
        f.id +
        '">' +
        "<td>" +
        f.sn +
        "</td>" +
        "<td>" +
        f.name +
        "</td>" +
        "<td>" +
        f.phone +
        "</td>" +
        "<td>" +
        f.email +
        "</td>" +
        "<td>" +
        starsHtml(f.stars) +
        "</td>" +
        "<td>" +
        (f.services || []).join(", ") +
        "</td>" +
        "<td>" +
        f.submittedAt +
        "</td>" +
        '<td class="actions-cell" onclick="event.stopPropagation()">' +
        '<div class="dropdown" data-dropdown>' +
        '<button type="button" class="btn btn-ghost" data-dropdown-toggle aria-label="Actions">' +
        icon("more-vertical") +
        "</button>" +
        '<div class="dropdown-menu">' +
        '<button type="button" class="dropdown-item" data-view-feedback="' +
        f.id +
        '">' +
        icon("eye") +
        " View details</button>" +
        "</div></div>" +
        "</td></tr>"
      );
    }).join("");

    return (
      '<div class="page">' +
      '<div class="page-header">' +
      '<h1 class="page-title">Collected Feedback</h1>' +
      "</div>" +
      searchFilter(
        "Search by name, phone, or email...",
        '<select class="select" disabled><option>All services</option></select>'
      ) +
      '<div class="list-region"><table class="table">' +
      "<thead><tr>" +
      "<th>SN</th><th>Name</th><th>Phone</th><th>Email</th><th>Rating</th><th>Services</th><th>Submitted</th><th class=\"actions-cell\">Actions</th>" +
      "</tr></thead><tbody>" +
      rows +
      "</tbody></table></div>" +
      paginationHtml("responses", MOCK_FEEDBACK.length) +
      "</div>"
    );
  }

  function renderFeedbackForm() {
    const serviceChips = MOCK_SERVICE_CATEGORIES.map(function (cat) {
      return (
        '<label class="service-chip">' +
        '<input type="checkbox" data-service-id="' +
        cat.id +
        '" />' +
        "<span>" +
        '<svg class="chip-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>' +
        cat.name +
        "</span>" +
        "</label>"
      );
    }).join("");

    return (
      '<div class="form-page">' +
      '<div class="form-bg" aria-hidden="true"></div>' +
      '<div class="form-container">' +
      '<div class="form-card">' +
      "<h1>Share your feedback</h1>" +
      '<p class="form-lead">Tell us about your experience. Select the services you used and rate each question.</p>' +
      '<form id="feedback-form" novalidate>' +
      '<fieldset class="form-section">' +
      '<div class="form-grid">' +
      '<label class="field"><span>Name <em>*</em></span><input class="field-input" type="text" name="name" placeholder="Your name" /></label>' +
      '<label class="field"><span>Email <em>*</em></span><input class="field-input" type="email" name="email" placeholder="you@email.com" /></label>' +
      '<label class="field"><span>Phone <em>*</em></span><input class="field-input" type="tel" name="phone" placeholder="Your phone" /></label>' +
      "</div>" +
      "</fieldset>" +
      '<fieldset class="form-section">' +
      "<legend>Services used <em>*</em></legend>" +
      '<p class="field-hint">You can select more than one.</p>' +
      '<div class="service-chip-list" id="service-chip-list">' +
      serviceChips +
      "</div>" +
      "</fieldset>" +
      '<div id="dynamic-questions" class="dynamic-questions"></div>' +
      '<fieldset class="form-section">' +
      "<legend>Remarks / Comments</legend>" +
      '<textarea class="field-input remarks-input" name="remarks" rows="4" placeholder="Anything else you would like to share?"></textarea>' +
      "</fieldset>" +
      '<button type="submit" class="btn btn-primary btn-block">Submit feedback</button>' +
      '<p class="form-footnote">UI mockup — submission is not saved.</p>' +
      "</form>" +
      "</div>" +
      '<p class="form-back"><a href="#/feedback/questions">← Back to admin mockup</a></p>' +
      "</div></div>"
    );
  }

  function buildQuestionsForServices(selectedIds) {
    const container = document.getElementById("dynamic-questions");
    if (!container) return;

    if (!selectedIds.length) {
      container.innerHTML = "";
      return;
    }

    const sections = selectedIds
      .map(function (id) {
        const cat = MOCK_SERVICE_CATEGORIES.find(function (c) {
          return c.id === id;
        });
        if (!cat) return "";
        const enabledQs = cat.questions.filter(function (q) {
          return q.enabled;
        });
        if (!enabledQs.length) {
          return (
            '<fieldset class="form-section question-section">' +
            "<legend>" +
            cat.name +
            "</legend>" +
            '<p class="empty-hint">No enabled questions for this service.</p>' +
            "</fieldset>"
          );
        }
        const qs = enabledQs
          .map(function (q) {
            return (
              '<div class="rating-question">' +
              "<p>" +
              q.text +
              "</p>" +
              starPickerHtml(q.id) +
              "</div>"
            );
          })
          .join("");
        return (
          '<fieldset class="form-section question-section">' +
          "<legend>" +
          cat.name +
          "</legend>" +
          qs +
          "</fieldset>"
        );
      })
      .join("");

    container.innerHTML = sections;
    bindStarPickers(container);
  }

  function bindStarPickers(root) {
    (root || document).querySelectorAll("[data-star-picker]").forEach(function (picker) {
      picker.querySelectorAll(".star-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const value = Number(btn.getAttribute("data-value"));
          picker.setAttribute("data-rating", String(value));
          picker.querySelectorAll(".star-btn").forEach(function (b, idx) {
            b.classList.toggle("filled", idx < value);
          });
        });
      });
    });
  }

  function openFeedbackModal(id) {
    const f = MOCK_FEEDBACK.find(function (x) {
      return x.id === id;
    });
    if (!f) return;

    const answersByService = {};
    (f.answers || []).forEach(function (a) {
      const key = a.service || "General";
      if (!answersByService[key]) answersByService[key] = [];
      answersByService[key].push(a);
    });

    const answersHtml = Object.keys(answersByService)
      .map(function (service) {
        const rows = answersByService[service]
          .map(function (a) {
            return (
              '<div class="detail-row"><dt></dt><dd><strong>' +
              a.question +
              "</strong><br/>" +
              starsHtml(a.stars) +
              "</dd></div>"
            );
          })
          .join("");
        return (
          '<h3 class="detail-service">' +
          service +
          "</h3>" +
          rows
        );
      })
      .join("");

    const backdrop = document.getElementById("modal-backdrop");
    backdrop.innerHTML =
      '<div class="modal" role="dialog" aria-modal="true">' +
      '<div class="modal-header">' +
      "<h2>Feedback details</h2>" +
      '<button type="button" class="btn btn-ghost" data-close-modal aria-label="Close">' +
      icon("x") +
      "</button>" +
      "</div>" +
      '<div class="modal-body">' +
      '<div class="detail-row"><dt>Name</dt><dd>' +
      f.name +
      "</dd></div>" +
      '<div class="detail-row"><dt>Phone</dt><dd>' +
      f.phone +
      "</dd></div>" +
      '<div class="detail-row"><dt>Email</dt><dd>' +
      f.email +
      "</dd></div>" +
      '<div class="detail-row"><dt>Services</dt><dd>' +
      (f.services || []).join(", ") +
      "</dd></div>" +
      '<div class="detail-row"><dt>Rating</dt><dd>' +
      starsHtml(f.stars) +
      " (" +
      f.stars +
      "/5)</dd></div>" +
      '<div class="detail-row"><dt>Submitted</dt><dd>' +
      f.submittedAt +
      "</dd></div>" +
      '<div class="detail-row detail-row-remarks"><dt>Remarks</dt><dd><textarea class="remarks-box" readonly rows="3">' +
      (f.remarks || "") +
      "</textarea></dd></div>" +
      '<hr style="border:none;border-top:1px solid var(--border);margin:0.25rem 0" />' +
      '<h3 style="font-size:0.9rem;font-weight:600">Responses</h3>' +
      answersHtml +
      "</div>" +
      '<div class="modal-footer">' +
      '<button type="button" class="btn btn-outline" data-close-modal>Close</button>' +
      "</div></div>";

    backdrop.classList.add("open");
  }

  function closeModal() {
    const backdrop = document.getElementById("modal-backdrop");
    backdrop.classList.remove("open");
    backdrop.innerHTML = "";
  }

  function normalizeHash(hash) {
    if (!hash || hash === "#" || hash === "#/") return "#/dashboard";
    return hash;
  }

  function getActiveHash(hash) {
    let best = null;
    let bestLen = -1;
    NAV_GROUPS.forEach(function (g) {
      g.items.forEach(function (item) {
        if (
          (hash === item.hash || hash.indexOf(item.hash + "/") === 0) &&
          item.hash.length > bestLen
        ) {
          best = item.hash;
          bestLen = item.hash.length;
        }
      });
    });
    return best;
  }

  function renderSidebar(activeHash) {
    const el = document.getElementById("sidebar-nav");
    if (!el) return;
    el.innerHTML = NAV_GROUPS.map(function (group) {
      const items = group.items
        .map(function (item) {
          const active = item.hash === activeHash ? " active" : "";
          return (
            '<a class="nav-item' +
            active +
            '" href="' +
            item.hash +
            '">' +
            icon(item.icon) +
            "<span>" +
            item.title +
            "</span></a>"
          );
        })
        .join("");
      return (
        '<div class="nav-group">' +
        '<div class="nav-group-label">' +
        group.label +
        "</div>" +
        items +
        "</div>"
      );
    }).join("");
  }

  function renderBreadcrumbs(hash) {
    const meta = PAGE_META[hash] || { title: "Page", crumbs: ["Admin"] };
    const el = document.getElementById("breadcrumbs");
    if (!el) return;
    const parts = meta.crumbs.map(function (c, i) {
      const isLast = i === meta.crumbs.length - 1;
      return (
        (i > 0 ? '<span aria-hidden="true">/</span>' : "") +
        '<span class="' +
        (isLast ? "current" : "") +
        '">' +
        c +
        "</span>"
      );
    });
    el.innerHTML = parts.join("");
  }

  function findQuestion(questionId) {
    for (let i = 0; i < MOCK_SERVICE_CATEGORIES.length; i++) {
      const cat = MOCK_SERVICE_CATEGORIES[i];
      const q = cat.questions.find(function (item) {
        return item.id === questionId;
      });
      if (q) return { cat: cat, question: q };
    }
    return null;
  }

  function refreshCategoryMeta(categoryId) {
    const cat = MOCK_SERVICE_CATEGORIES.find(function (c) {
      return c.id === categoryId;
    });
    if (!cat) return;
    const card = document.querySelector('[data-category-id="' + categoryId + '"]');
    if (!card) return;
    const enabledCount = cat.questions.filter(function (q) {
      return q.enabled;
    }).length;
    const meta = card.querySelector(".category-meta");
    if (meta) {
      meta.textContent =
        cat.questions.length + " questions · " + enabledCount + " enabled";
    }
  }

  function bindQuestionsPage() {
    const addCatBtn = document.getElementById("btn-add-category");
    if (addCatBtn) {
      addCatBtn.onclick = function () {
        openAddCategoryModal();
      };
    }

    document.querySelectorAll(".category-card").forEach(bindCategoryCard);
  }

  function bindCategoryCard(card) {
    if (!card) return;
    const btn = card.querySelector("[data-add-question]");
    const input = card.querySelector("[data-new-question-input]");
    if (btn) {
      btn.onclick = function () {
        const catId = btn.getAttribute("data-add-question");
        const text = (input && input.value ? input.value : "").trim();
        if (!text) {
          if (input) input.focus();
          return;
        }
        const cat = MOCK_SERVICE_CATEGORIES.find(function (c) {
          return c.id === catId;
        });
        if (!cat) return;
        const q = { id: "q-custom-" + nextQuestionId++, text: text, enabled: true };
        cat.questions.push(q);
        const list = card.querySelector(".question-list");
        const empty = list.querySelector(".empty-hint");
        if (empty) empty.remove();
        list.insertAdjacentHTML(
          "afterbegin",
          '<div class="question-row" data-question-row="' +
            q.id +
            '"><p class="question-text">' +
            q.text +
            "</p>" +
            toggleHtml(true, q.id) +
            "</div>"
        );
        input.value = "";
        refreshCategoryMeta(catId);
        bindQuestionToggles(card);
      };
    }

    if (input) {
      input.onkeydown = function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          if (btn) btn.click();
        }
      };
    }

    bindQuestionToggles(card);
  }

  function bindQuestionToggles(root) {
    (root || document).querySelectorAll("[data-toggle-question]").forEach(function (input) {
      input.onchange = function () {
        const found = findQuestion(input.getAttribute("data-toggle-question"));
        if (!found) return;
        found.question.enabled = input.checked;
        const row = input.closest(".question-row");
        if (row) row.classList.toggle("is-disabled", !input.checked);
        const label = input.parentElement.querySelector(".toggle-label");
        if (label) label.textContent = input.checked ? "Enabled" : "Disabled";
        input.parentElement.title = input.checked ? "Enabled" : "Disabled";
        refreshCategoryMeta(found.cat.id);
      };
    });
  }

  function bindFeedbackForm() {
    const list = document.getElementById("service-chip-list");
    if (!list) return;

    function selectedIds() {
      return Array.prototype.slice
        .call(list.querySelectorAll('input[type="checkbox"]:checked'))
        .map(function (el) {
          return el.getAttribute("data-service-id");
        });
    }

    list.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
      cb.addEventListener("change", function () {
        buildQuestionsForServices(selectedIds());
      });
    });

    const form = document.getElementById("feedback-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        window.alert("Thanks! This is a UI mockup — feedback is not submitted.");
      });
    }
  }

  function bindPageInteractions() {
    document.querySelectorAll("[data-dropdown]").forEach(function (dd) {
      const toggle = dd.querySelector("[data-dropdown-toggle]");
      if (!toggle) return;
      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        document.querySelectorAll("[data-dropdown].open").forEach(function (o) {
          if (o !== dd) o.classList.remove("open");
        });
        dd.classList.toggle("open");
      });
    });

    document.querySelectorAll("[data-view-feedback]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        openFeedbackModal(btn.getAttribute("data-view-feedback"));
        document.querySelectorAll("[data-dropdown].open").forEach(function (o) {
          o.classList.remove("open");
        });
      });
    });

    document.querySelectorAll("tr[data-feedback-id]").forEach(function (row) {
      row.addEventListener("click", function () {
        openFeedbackModal(row.getAttribute("data-feedback-id"));
      });
    });
  }

  function setShellMode(standalone) {
    const admin = document.getElementById("admin-shell");
    const formShell = document.getElementById("form-shell");
    if (standalone) {
      admin.hidden = true;
      formShell.hidden = false;
      document.body.classList.add("is-form-mode");
    } else {
      admin.hidden = false;
      formShell.hidden = true;
      formShell.innerHTML = "";
      document.body.classList.remove("is-form-mode");
    }
  }

  function renderPage(hash) {
    const meta = PAGE_META[hash];
    const standalone = meta && meta.standalone;

    if (standalone) {
      setShellMode(true);
      document.getElementById("form-shell").innerHTML = renderFeedbackForm();
      bindFeedbackForm();
      return;
    }

    setShellMode(false);
    const content = document.getElementById("page-content");

    if (hash === "#/dashboard" || hash === "#/") {
      content.innerHTML = renderDashboard();
    } else if (hash === "#/items") {
      content.innerHTML = renderItems();
    } else if (hash === "#/feedback/questions") {
      content.innerHTML = renderQuestions();
      bindQuestionsPage();
    } else if (hash === "#/feedback/collected") {
      content.innerHTML = renderCollectedFeedback();
    } else {
      content.innerHTML = renderPlaceholder(meta ? meta.title : "Page");
    }

    bindPageInteractions();
  }

  function route() {
    const hash = normalizeHash(location.hash);
    if (location.hash !== hash) {
      location.hash = hash;
      return;
    }
    const meta = PAGE_META[hash];
    const active = getActiveHash(hash);

    if (!(meta && meta.standalone)) {
      renderSidebar(active);
      renderBreadcrumbs(hash);
    }

    renderPage(hash);
    document.title =
      (meta ? meta.title : "Page") + " · Food App Mockup";

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    if (sidebar) sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
  }

  function init() {
    document.getElementById("sidebar-toggle").addEventListener("click", function () {
      document.getElementById("sidebar").classList.toggle("open");
      document.getElementById("sidebar-overlay").classList.toggle("open");
    });

    document.getElementById("sidebar-overlay").addEventListener("click", function () {
      document.getElementById("sidebar").classList.remove("open");
      document.getElementById("sidebar-overlay").classList.remove("open");
    });

    document.getElementById("modal-backdrop").addEventListener("click", function (e) {
      if (e.target === this || e.target.closest("[data-close-modal]")) {
        closeModal();
      }
    });

    document.addEventListener("click", function () {
      document.querySelectorAll("[data-dropdown].open").forEach(function (o) {
        o.classList.remove("open");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });

    window.addEventListener("hashchange", route);
    route();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
