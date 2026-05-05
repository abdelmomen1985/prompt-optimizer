const messages = {
  "history": {
    "title": "السجل",
    "iterationNote": "ملاحظة التكرار",
    "optimizedPrompt": "الموجّه المُحسَّن",
    "searchPlaceholder": "البحث في السجل...",
    "confirmClear": "هل أنت متأكد من مسح كل سجلات التاريخ؟ لا يمكن التراجع عن هذا الإجراء.",
    "confirmDeleteChain": "هل أنت متأكد من حذف سجل التاريخ هذا؟ لا يمكن التراجع عن هذا الإجراء.",
    "cleared": "تم مسح السجل",
    "chainDeleted": "تم حذف سجل التاريخ",
    "useThisVersion": "استخدم هذا الإصدار",
    "noHistory": "لا توجد سجلات تاريخ"
  },
  "test": {
    "title": "اختبار",
    "areaTitle": "منطقة الاختبار",
    "content": "محتوى الاختبار",
    "placeholder": "أدخل المحتوى للاختبار...",
    "modes": {
      "simple": "وضع بسيط",
      "conversation": "وضع المحادثة"
    },
    "simpleMode": {
      "label": "محتوى الاختبار",
      "placeholder": "أدخل المحتوى للاختبار...",
      "help": ""
    },
    "model": "نموذج الاختبار",
    "startTest": "اختبار",
    "startCompare": "اختبار",
    "testing": "جارٍ الاختبار...",
    "toggleCompare": {
      "enable": "تمكين المقارنة",
      "disable": "تعطيل المقارنة"
    },
    "compareMode": "وضع المقارنة",
    "layout": {
      "columns": "الأعمدة",
      "workspace": "مساحة العمل",
      "previous": "السابق",
      "original": "الأصلي",
      "previousHelp": {
        "dynamic": "",
        "currentBase": "تحتوي مساحة العمل على تعديلات غير محفوظة، لذا يستخدم هذا الإصدار المحفوظ الحالي.",
        "earlierSaved": "مساحة العمل محفوظة بالفعل، لذا يستخدم الإصدار الذي يسبقها.",
        "originalFallback": "لا يوجد إصدار سابق بعد، لذا يستخدم الموجّه الأصلي.",
        "sameAsWorkspace": "حاليًا يطابق مساحة العمل، لذا ستعامل المقارنة هذا كإعادة اختبار."
      },
      "latest": "الأحدث",
      "runAll": "تشغيل الكل",
      "runThisColumn": "تشغيل هذا العمود",
      "stale": "تغيّر الإعداد"
    },
    "originalResult": "النتيجة A",
    "optimizedResult": "النتيجة B",
    "compareResultA": "النتيجة A",
    "compareResultB": "النتيجة B",
    "testResult": "نتيجة الاختبار",
    "userPromptTest": "اختبار موجّه المستخدم",
    "advanced": {
      "startTest": "اختبار",
      "result": "نتيجة الاختبار",
      "messageCount": "{count} رسالة",
      "missingVariables": "{count} متغير مفقود"
    },
    "error": {
      "failed": "فشل الاختبار",
      "noModel": "يرجى اختيار نموذج اختبار أولاً",
      "noTestContent": "يرجى إدخال محتوى الاختبار",
      "noWorkspacePrompt": "مساحة العمل فارغة. يرجى إدخال أو توليد موجّه في مساحة العمل أولاً",
      "noOriginalPrompt": "يرجى إدخال الموجّه الأصلي أولاً",
      "noOptimizedPrompt": "يرجى توليد الموجّه المُحسَّن أولاً",
      "missingVariables": "متغيرات مفقودة أو فارغة: {vars}",
      "forbiddenTemplateSyntax": "صياغة Mustache غير المُهرَّبة (مثل الأقواس الثلاثية أو وسوم العطف) غير مدعومة. يرجى استخدام عناصر نائبة عادية للمتغيرات.",
      "originalTestFailed": "فشل اختبار الموجّه الأصلي",
      "optimizedTestFailed": "فشل اختبار الموجّه المُحسَّن",
      "saveToGlobalFailed": "فشل حفظ المتغير {name} في العام"
    },
    "enableMarkdown": "تمكين عرض Markdown",
    "disableMarkdown": "تعطيل عرض Markdown",
    "thinking": "عملية التفكير",
    "variables": {
      "detected": "تم اكتشاف المتغيرات",
      "manageVariables": "إدارة المتغيرات",
      "viewPreview": "عرض المعاينة",
      "title": "المتغيرات",
      "formTitle": "المتغيرات المؤقتة",
      "variablesCount": "متغيرات",
      "clearAll": "مسح الكل",
      "inputPlaceholder": "أدخل قيمة المتغير",
      "overridesGlobal": "يتجاوز العام",
      "noVariables": "لم يتم اكتشاف متغيرات",
      "previewTitle": "نتيجة المعاينة",
      "firstRound": "الجولة الأولى (المتغيرات المدمجة)",
      "secondRound": "الجولة الثانية (المتغيرات المخصّصة)",
      "builtinVars": "المتغيرات المدمجة",
      "customVars": "المتغيرات المخصّصة",
      "finalPreview": "المعاينة النهائية",
      "missingVars": "المتغيرات المفقودة",
      "saveToGlobal": "حفظ في المتغيرات العامة",
      "savedToGlobal": "تم الحفظ في المتغيرات العامة",
      "emptyValueWarning": "قيمة فارغة، لا يمكن الحفظ",
      "tempCount": "{count} متغيرات مؤقتة",
      "addVariable": "إضافة متغير",
      "nameRequired": "اسم المتغير مطلوب",
      "addSuccess": "تمت إضافة المتغير بنجاح",
      "clearAllConfirm": "مسح كل المتغيرات المؤقتة ({count})؟",
      "renameSuccess": "تم تغيير اسم المتغير من {oldName} إلى {newName}",
      "renameNotSupported": "إعادة تسمية المتغيرات غير مدعومة في هذا العرض",
      "deleteSuccess": "تم حذف المتغير {name}",
      "clearSuccess": "تم مسح كل المتغيرات المؤقتة",
      "delete": "حذف هذا المتغير",
      "fullscreenEdit": "تعديل القيمة بملء الشاشة"
    },
    "variableValueGeneration": {
      "generateButton": "ملء قيم المتغيرات بذكاء",
      "generating": "جارٍ التوليد بذكاء...",
      "dialogTitle": "معاينة قيم المتغيرات المُولَّدة",
      "variableName": "اسم المتغير",
      "generatedValue": "القيمة المُولَّدة",
      "valuePlaceholder": "أدخل قيمة المتغير",
      "reason": "سبب التوليد",
      "confidence": "الثقة",
      "selected": "محدّد",
      "batchApply": "تطبيق دفعي ({count})",
      "noVariablesToGenerate": "لا توجد متغيرات تحتاج إلى قيم",
      "generateFailed": "فشل توليد قيم المتغيرات",
      "applySuccess": "تم تطبيق {count} من قيم المتغيرات بنجاح",
      "noPrompt": "يرجى إدخال أو توليد موجّه مُحسَّن أولاً",
      "noMissingVariables": "كل المتغيرات معبّأة بالفعل",
      "serviceNotReady": "خدمة توليد قيم المتغيرات غير جاهزة",
      "noValues": "لم يتم توليد أي قيم متغيرات"
    },
    "invalidVariables": "بيانات متغيرات غير صالحة",
    "getVariablesFailed": "فشل الحصول على المتغيرات"
  },
  "evaluation": {
    "button": "تقييم",
    "evaluate": "تقييم",
    "reEvaluate": "إعادة التقييم",
    "compareEvaluate": "مقارنة",
    "loading": "جارٍ التقييم...",
    "analyzing": "جارٍ التحليل...",
    "overallScore": "العام",
    "dimensions": "درجات الأبعاد",
    "issues": "المشاكل",
    "improvements": "التحسينات",
    "applyToIterate": "تكرار",
    "rewriteFromEvaluation": "إعادة الكتابة",
    "rewriteSkipped": "يوصي التقييم بالاحتفاظ بالموجّه الحالي دون تغيير، لذا تم تجاوز إعادة الكتابة.",
    "applySuccess": "جارٍ تطبيق التحسين...",
    "noResult": "لا توجد نتيجة تقييم بعد. انقر زر التقييم للبدء.",
    "viewDetails": "عرض التفاصيل",
    "feedbackAnalyze": "التركيز",
    "feedbackTitle": "التركيز",
    "optional": "اختياري",
    "feedbackPlaceholder": "صف ما يجب التركيز عليه. سيُعطي التحليل الأولوية لملاحظاتك.",
    "feedbackHint": "Esc للإلغاء · Ctrl/⌘+Enter للإرسال",
    "feedbackSubmit": "إرسال وتحليل",
    "focus": "التركيز",
    "focusTitle": "التركيز",
    "focusPlaceholder": "اختياري: على ماذا يجب أن يركّز التقييم؟ (مثل بنية المخرجات، القيود المفقودة، طول المثال)",
    "focusHint": "اتركه فارغًا لتشغيل التقييم الذكي الافتراضي.",
    "stale": {
      "default": "تستند هذه النتيجة إلى محتوى أقدم. أعد تشغيل التقييم إذا لزم الأمر.",
      "promptOnly": "تغيّر الموجّه. أعد تشغيل التحليل إذا لزم الأمر.",
      "promptIterate": "تغيّر الموجّه أو طلب التكرار. أعد تشغيل التحليل إذا لزم الأمر.",
      "result": "تغيّر إعداد الاختبار أو مساحة العمل. أعد تشغيل التقييم إذا لزم الأمر.",
      "compare": "تغيّر إعداد الاختبار أو مساحة العمل. أعد تشغيل المقارنة إذا لزم الأمر."
    },
    "title": {
      "default": "نتيجة التقييم",
      "result": "تقييم النتيجة",
      "compare": "تقييم المقارنة",
      "promptOnly": "تحليل جودة الموجّه",
      "promptIterate": "تحليل التكرار"
    },
    "type": {
      "result": "تقييم هذه النتيجة",
      "compare": "تقييم المقارنة"
    },
    "compareConfig": {
      "button": "إعدادات المقارنة",
      "dialogTitle": "إعدادات المقارنة",
      "helper": "أكّد دور كل عمود اختبار. إذا بدا اقتراح النظام صحيحًا، يمكنك التأكيد مباشرة.",
      "helperSummary": "اختر هدف التحسين أولاً. سيتبع الإصدار السابق مساحة العمل الحالية تلقائيًا.",
      "summaryTitle": "خطة هذه المقارنة",
      "currentTargetLabel": "هدف التحسين الحالي",
      "currentTargetMissing": "لم يُحدَّد بعد",
      "summaryUnassigned": "غير معيّن",
      "summaryUnused": "غير مستخدم في هذه الجولة",
      "summaryNeedTarget": "هدف التحسين مطلوب",
      "summaryAssigned": "جاهز",
      "summaryRequired": "مطلوب",
      "summaryOptional": "اختياري",
      "summaryStructured": "ستحكم المقارنة الذكية على ما إذا كان هدف التحسين قد تحسّن، وما إذا كان يمكن التعلّم من المعلّم، وما إذا كان الاستنتاج يبدو مستقرًا.",
      "summaryGeneric": "هذا الإعداد أنسب للمقارنة القياسية ولن يدخل المقارنة الذكية زوجًا بزوج.",
      "summaryPairs": "مجموعات المقارنة الرئيسية: {pairs}",
      "summaryHints": {
        "target": "اختر العمود الذي تحاول فعلاً تحسينه في هذه الجولة.",
        "baseline": "عادةً الإصدار السابق مباشرةً لمساحة العمل، يُستخدم للتحقق من التقدّم الحقيقي.",
        "reference": "عادةً العمود الأقوى أو الأكثر استقرارًا الذي يلعب دور المعلّم.",
        "replica": "استخدم هذا للتحقق من استقرار الاستنتاج. إذا كان السابق يطابق مساحة العمل، فقد يظهر هنا.",
        "referenceBaseline": "استخدم فقط عندما تريد أيضًا فحص ما إذا كان تغيير جانب المعلّم لا يزال صالحًا."
      },
      "assignedHints": {
        "baselineDynamic": "تم حلّه تلقائيًا من مساحة العمل الحالية.",
        "replicaFromPrevious": "يطابق محتوى مساحة العمل الحالية، لذا يُعامل كإعادة اختبار."
      },
      "requireTarget": "تم اكتشاف اختبارات متعددة لمساحة العمل. يرجى اختيار أيها هدف التحسين.",
      "targetRequired": "يرجى اختيار هدف تحسين أولاً.",
      "targetNeededShort": "اختر هدف التحسين",
      "reviewNeededShort": "يرجى إعادة التأكيد",
      "autoDetected": "اقتراح النظام",
      "manualAssigned": "يدوي",
      "selectRolePlaceholder": "اختر دورًا",
      "restoreSuggested": "استعادة الاقتراح",
      "suggestedRoleTag": "اقتراح النظام: {role}",
      "unassignedTag": "غير واضح بعد",
      "unresolvedHint": "هذا العمود غير معيّن بوضوح بعد، لذا لن يدخل تدفق المقارنة الذكية الأساسي.",
      "unresolvedFallbackSummary": "الأعمدة {entries} غير معيّنة بوضوح، لذا ستعود هذه الجولة إلى المقارنة القياسية.",
      "expiredManualTag": "يحتاج إلى إعادة تأكيد",
      "expiredManualSummary": "{count} من الإعدادات اليدوية القديمة لم تعد صالحة، لذا عاد النظام إلى الاقتراح الحالي.",
      "workspaceChangedTag": "يحتاج إلى إعادة تأكيد",
      "workspaceChangedSummary": "{count} من إعدادات أدوار مساحة العمل تحتاج إلى مراجعة لأن موجّه مساحة العمل تغيّر.",
      "keepAuto": "احتفظ باقتراح النظام",
      "keepAutoWithRole": "احتفظ باقتراح النظام (الحالي: {role})",
      "useInferred": "استخدم اقتراح النظام",
      "clearManual": "إزالة التجاوزات اليدوية",
      "slotSectionTitle": "إعداد كل عمود",
      "slotSectionSummary": "ملأ النظام بالفعل اقتراحًا لكل عمود. غيّره فقط إذا بدا خاطئًا.",
      "currentRoleLabel": "الدور الحالي",
      "rolePickerLabel": "دور هذا العمود",
      "suggestedRoleLabel": "اقتراح النظام",
      "workspaceChangedInline": "تغيّر موجّه مساحة العمل وراء هذا العمود. يرجى تأكيد الدور مرة أخرى.",
      "planStructuredSummaryDynamic": "ستتمحور هذه الجولة حول هدف التحسين الحالي وتركّز على ما إذا كان {focuses}.",
      "planGenericSummary": "أعمدة الاختبار الحالية لا يمكنها بعد تشكيل إعداد مقارنة ذكية مستقر، لذا ستعود هذه الجولة إلى المقارنة القياسية.",
      "structuredFocusJoiner": "، ",
      "structuredFocusFinalJoiner": "، و ",
      "structuredFocus": {
        "targetBaseline": "تحسّن عن الإصدار السابق",
        "targetReference": "لا تزال هناك فجوة مع المعلّم",
        "referenceBaseline": "نوع التغيير نفسه ينطبق أيضًا على جانب المعلّم",
        "targetReplica": "يبدو الاستنتاج الحالي مستقرًا"
      },
      "previewModeLabel": "وضع المقارنة",
      "previewPairsLabel": "مجموعات زوج بزوج",
      "previewReasonsLabel": "ملاحظات النظام",
      "previewModeStructured": "مقارنة ذكية",
      "previewModeGeneric": "مقارنة قياسية",
      "genericFallbackSummary": "سيستخدم هذا الإعداد المقارنة القياسية بدلاً من المقارنة الذكية زوجًا بزوج.",
      "confirmDisabled": "حلّ التعارضات قبل التأكيد",
      "noVersionLabel": "لم يُختر إصدار",
      "noModel": "لم يُختر نموذج",
      "blockingSummary": "إعداد الأدوار الحالي به تعارضات. يرجى إصلاحها قبل التأكيد.",
      "advancedSectionTitle": "تفاصيل متقدمة",
      "advancedSectionSummary": "يشرح هذا القسم كيف سيقارن النظام الأعمدة ولماذا.",
      "showAdvancedRoles": "عرض الأدوار المتقدمة",
      "hideAdvancedRoles": "إخفاء الأدوار المتقدمة",
      "showAdvancedDetails": "عرض التفاصيل المتقدمة",
      "hideAdvancedDetails": "إخفاء التفاصيل المتقدمة",
      "advancedConflictTitle": "مشاكل تحتاج إلى حل",
      "pairValues": {
        "targetBaseline": "هدف التحسين مقابل الإصدار السابق",
        "targetReference": "هدف التحسين مقابل المعلّم",
        "referenceBaseline": "المعلّم مقابل الإصدار السابق للمعلّم",
        "targetReplica": "هدف التحسين مقابل إعادة الاختبار"
      },
      "reasonValues": {
        "duplicateTarget": "هناك أهداف تحسين متعددة، لذا لا يستطيع النظام معرفة أي عمود تحاول حقًا تحسينه.",
        "duplicateBaseline": "هناك إصدارات سابقة متعددة، لذا لا يستطيع النظام معرفة أيها يجب استخدامه كأساس.",
        "duplicateReference": "هناك معلّمون متعددون، لذا لا يستطيع النظام معرفة أي عمود يجب التعلّم منه.",
        "duplicateReferenceBaseline": "هناك إصدارات سابقة متعددة للمعلّم، لذا لا يستطيع النظام معرفة أيها ينتمي إلى جانب المعلّم.",
        "hasAuxiliarySnapshot": "بعض الاختبارات المختارة ليست مقارنات زوجية ذات معنى، لذا ستعود هذه الجولة إلى المقارنة القياسية.",
        "missingTarget": "لا يوجد هدف تحسين قابل للاستخدام، لذا لا يمكن بدء المقارنة الذكية.",
        "missingStructuredCompanion": "هدف التحسين يفتقر إلى رفيق رئيسي (إصدار سابق أو معلّم أو إعادة اختبار)، لذا لا يمكن تشغيل الحكم الزوجي الأساسي بعد.",
        "referenceBaselineWithoutReference": "يوجد إصدار سابق للمعلّم بدون معلّم مطابق، لذا لن تشارك تلك الأدلة في المقارنة الذكية."
      },
      "roleValues": {
        "target": "هدف التحسين",
        "baseline": "الإصدار السابق",
        "reference": "المعلّم",
        "referenceBaseline": "الإصدار السابق للمعلّم",
        "replica": "إعادة اختبار",
        "auxiliary": "اختبار آخر"
      },
      "suggestionReasons": {
        "default": "استنتج النظام هذا الاقتراح من الإصدارات والنماذج وعلاقات الموجّه الحالية.",
        "target": {
          "uniqueWorkspace": "هذا العمود الوحيد لمساحة العمل، لذا يُقترح كهدف تحسين.",
          "workspace": "هذا عمود مساحة العمل الحالي، لذا يُقترح كهدف تحسين."
        },
        "baseline": {
          "dynamicPrevious": "هذا الإصدار السابق لمساحة العمل الحالية، لذا يُقترح كأساس.",
          "sameModelDifferentPrompt": "يستخدم نفس نموذج هدف التحسين ولكن بموجّه مختلف، لذا يُقترح كإصدار سابق."
        },
        "reference": {
          "samePromptDifferentModel": "هذه نتيجة مساحة عمل من نموذج مختلف، لذا تُقترح كمعلّم.",
          "differentModel": "يستخدم نموذجًا مختلفًا عن هدف التحسين، لذا يُقترح كمعلّم."
        },
        "referenceBaseline": {
          "sameModelDifferentPrompt": "يستخدم نفس نموذج المعلّم ولكن بموجّه مختلف، لذا يُقترح كإصدار سابق للمعلّم."
        },
        "replica": {
          "previousMatchesWorkspace": "يطابق محتوى مساحة العمل الحالية، لذا يُقترح كإعادة اختبار.",
          "samePromptAsTarget": "يستخدم نفس موجّه هدف التحسين، لذا يُقترح كإعادة اختبار."
        },
        "auxiliary": {
          "default": "لن يدخل هذا العمود المقارنة الذكية الزوجية الأساسية، لذا يبقى كاختبار آخر."
        }
      }
    },
    "compareShared": {
      "status": {
        "needTarget": "يرجى اختيار هدف التحسين أولاً.",
        "needReview": "تغيّرت الإعدادات. يرجى التأكيد مرة أخرى."
      },
      "roleValues": {
        "target": "هدف التحسين",
        "baseline": "الإصدار السابق",
        "reference": "المعلّم",
        "referenceBaseline": "الإصدار السابق للمعلّم",
        "replica": "إعادة اختبار",
        "auxiliary": "اختبار آخر"
      },
      "roleDescriptions": {
        "target": "هذا هو العمود الذي تعمل بنشاط على تحسينه وتحاول تطويره في هذه الجولة.",
        "baseline": "هذا هو الإصدار السابق مباشرةً لمساحة العمل الحالية، يُستخدم لتحديد ما إذا كانت آخر إعادة كتابة تحسينًا حقيقيًا.",
        "reference": "هذه مخرجات معلّم تستحق التعلّم منها، عادةً من نموذج أقوى أو أكثر استقرارًا.",
        "referenceBaseline": "هذا الإصدار السابق على جانب المعلّم. يظهر فقط في التفاصيل المتقدمة ويساعد على الحكم على ما إذا كان نفس التغيير ينطبق على جانب المعلّم.",
        "replica": "هذه إعادة اختبار تُستخدم للتحقق من استقرار الاستنتاج. إذا كان السابق يطابق مساحة العمل، فقد يظهر هنا أيضًا.",
        "auxiliary": "لا يزال بإمكان هذا الاختبار الظهور في المقارنة القياسية، ولكنه لن يصبح زوجًا أساسيًا للمقارنة الذكية."
      },
      "roleSource": {
        "manual": "أكّدت هذا الدور يدويًا.",
        "auto": "يقترح النظام هذا الدور تلقائيًا."
      },
      "unresolved": {
        "label": "غير واضح بعد",
        "description": "هذا العمود غير مرتبط بوضوح بدور مقارنة أساسي بعد.",
        "source": "لا يستطيع النظام حاليًا تصنيفه كهدف تحسين أو إصدار سابق أو معلّم أو إعادة اختبار."
      },
      "review": {
        "workspaceChanged": "تغيّر موجّه مساحة العمل المرتبط، لذا يجب مراجعة هذا الدور مرة أخرى.",
        "staleManual": "الدور اليدوي القديم لم يعد يطابق إعداد المقارنة الحالي."
      },
      "roleAction": "انقر هذا الوسم لتحديث دور المقارنة.",
      "assignment": {
        "unassigned": "لم يتم تعيين أي دور بعد.",
        "manual": "اخترت: {role}",
        "auto": "اقتراح النظام: {role}"
      },
      "modeValues": {
        "structured": "مقارنة ذكية",
        "generic": "مقارنة قياسية"
      },
      "recommendationValues": {
        "continue": "استمر في التكرار",
        "stop": "توقّف الآن",
        "review": "يحتاج إلى مراجعة"
      }
    },
    "compareHelp": {
      "title": "دليل تقييم المقارنة",
      "tooltip": "ما هو تقييم المقارنة؟"
    },
    "compareUnavailable": {
      "missingWorkspace": "يتطلب تقييم المقارنة نتيجة اختبار واحدة على الأقل لمساحة العمل لأن النظام يحتاج إلى إنتاج إرشادات لموجّه مساحة العمل الحالي. شغّل عمود مساحة العمل أولاً، ثم قارن مرة أخرى."
    },
    "compareSummary": {
      "decision": {
        "title": "نصيحة التكرار"
      },
      "reusableImprovements": "تحسينات قابلة لإعادة الاستخدام",
      "rewriteButton": "إعادة الكتابة من هذا التقييم",
      "rewriteSkipHint": "تنصح الإرشادات الحالية بإبقاء الموجّه كما هو ما لم تكن قد أكّدت بالفعل أنه لا يزال هناك مجال واضح وقابل لإعادة الاستخدام للتحسين.",
      "rewriteMinorHint": "يُوصى بتصحيح أصغر هنا بدلاً من إعادة كتابة كبيرة أخرى.",
      "compactSignals": {
        "targetVsBaseline": "السابق",
        "targetVsReferenceGap": "فجوة المعلّم",
        "improvementHeadroom": "المجال",
        "overfitRisk": "إفراط في الملاءمة"
      },
      "reasonTitles": {
        "progress": "السابق",
        "reference": "المعلّم",
        "stability": "الاستقرار"
      },
      "reasonBodies": {
        "progress": {
          "improved": "هدف التحسين متقدم على الإصدار السابق، لكن لا يزال عليك تأكيد أي المكاسب قابلة فعلاً لإعادة الاستخدام.",
          "flat": "هدف التحسين قريب من الإصدار السابق، لذا يجب الجمع بين أدلة المعلّم والاستقرار قبل تحديد الخطوة التالية.",
          "regressed": "تراجع هدف التحسين بالنسبة إلى الإصدار السابق، لذا يجب فحص ما تراجع أولاً."
        },
        "reference": {
          "none": "هدف التحسين قريب بالفعل من المعلّم، لذا قد تكون لإعادة كتابة أخرى عوائد محدودة.",
          "minor": "لا تزال هناك بعض الحركات الهيكلية التي يمكن لهدف التحسين تعلّمها من المعلّم.",
          "major": "لا تزال هناك فجوة واضحة مع المعلّم، لذا يجب أن تركّز الجولة التالية على تعلّم استراتيجية المعلّم الأقوى."
        },
        "stability": {
          "high": "قد يحتوي المكسب الحالي على خطر قوي لتلاؤم العينات، لذا يجب تصفية قواعد الإفراط في الملاءمة قبل إعادة كتابة أخرى.",
          "medium": "لا يزال هناك بعض خطر الإفراط في الملاءمة، لذا يجب أن تحتفظ الجولة التالية فقط بالقواعد القابلة لإعادة الاستخدام بحذر أكبر.",
          "low": "النتيجة قريبة بالفعل من التقارب، لذا أكّد أنه لا يزال هناك مجال حقيقي للتحسين قبل إضافة المزيد من القواعد.",
          "default": "لا تزال بحاجة إلى المزيد من الأدلة بمدخلات مشتركة لتأكيد ما إذا كان هذا الاستنتاج مستقرًا."
        }
      },
      "advanced": {
        "show": "عرض التفاصيل المتقدمة",
        "hide": "إخفاء التفاصيل المتقدمة",
        "title": "تفاصيل المقارنة",
        "mode": "وضع المقارنة",
        "roles": "الأعمدة المُقارنة",
        "stopSignals": "إشارات الخطر والتقارب",
        "insights": "الاستنتاجات الرئيسية",
        "focusSummaries": "النتائج المُركَّزة",
        "pairHighlights": "أبرز الأزواج",
        "evidence": "أبرز الأدلة الخام",
        "learnableSignals": "إشارات قابلة للتعلّم",
        "overfit": "خطر الإفراط في الملاءمة",
        "conflicts": "يحتاج إلى مراجعة يدوية",
        "judgements": "مقارنات زوجًا بزوج"
      }
    },
    "compareMetadata": {
      "title": "بيانات وصفية متقدمة للمقارنة",
      "insights": "الاستنتاجات الرئيسية",
      "decision": {
        "title": "قرار المقارنة",
        "keyEvidence": "الأدلة الرئيسية",
        "nextActions": "الإجراءات التالية",
        "headlines": {
          "continue": "هدف التحسين يسير في الاتجاه الصحيح، لكن لا يزال هناك مجال قابل للتنفيذ للتحسين.",
          "stop": "النتيجة الحالية تبدو قريبة من التقارب؛ من غير المرجح أن تساعد عمليات إعادة الكتابة التلقائية اللاحقة كثيرًا.",
          "review": "تحتاج نتيجة المقارنة الحالية إلى مراجعة يدوية قبل قبول إعادة كتابة أخرى.",
          "regressed": "يبدو أن هدف التحسين تراجع بالنسبة إلى الإصدار السابق؛ لا تقبل إعادة الكتابة هذه مباشرة."
        },
        "actions": {
          "inspectRegression": "فحص ما أزاله الإصدار الجديد أو أضعفه قبل محاولة إعادة كتابة أخرى.",
          "reviewBeforeRewrite": "راجع الأدلة المتعارضة أولاً، ثم قرّر ما إذا كنت ستعيد الكتابة أو تحتفظ بالإصدار الحالي.",
          "reviewPromptValidity": "تحقّق مما إذا كان تغيير الموجّه قابلًا للنقل فعلاً، لأن الأدلة من جانب المعلّم لا تدعمه حاليًا.",
          "learnFromReference": "تعلّم من بنية المعلّم الأقوى قبل إعادة الكتابة التالية.",
          "filterOverfit": "صفِّ القواعد الخاصة بالعينات واحتفظ فقط بالإرشادات القابلة لإعادة الاستخدام.",
          "continueTargetedRewrite": "إذا واصلت إعادة الكتابة، ركّز فقط على الفجوة الأعلى إشارة بدلاً من تغييرات واسعة.",
          "acceptCurrent": "تعامل مع مساحة العمل الحالية كقريبة من التقارب وتجنّب إضافة المزيد من القواعد ما لم تظهر أدلة جديدة.",
          "verifyStability": "أعد فحص الاستقرار بمدخل مشترك آخر إذا كان الحكم الحالي لا يزال على الحدود."
        }
      },
      "focusSummaries": "النتائج المُركَّزة",
      "mode": "وضع المقارنة",
      "roles": "الأعمدة المُقارنة",
      "judgements": "مقارنات زوجًا بزوج",
      "pairHighlights": "أبرز الأزواج",
      "progressSummary": "مقابل الإصدار السابق",
      "referenceGapSummary": "مقابل المعلّم",
      "promptChangeSummary": "صلاحية تغيير الموجّه",
      "stabilitySummary": "الاستقرار",
      "stopSignals": "إشارات الخطر والتقارب",
      "evidence": "الأدلة",
      "evidenceHighlights": "أبرز الأدلة",
      "learnableSignals": "إشارات قابلة للتعلّم",
      "overfitWarnings": "تحذيرات الإفراط في الملاءمة",
      "conflictSignals": "يحتاج إلى مراجعة يدوية",
      "targetVsBaseline": "هدف التحسين مقابل الإصدار السابق",
      "targetVsReferenceGap": "فجوة هدف التحسين مع المعلّم",
      "improvementHeadroom": "مجال التحسين",
      "overfitRisk": "خطر الإفراط في الملاءمة",
      "stopRecommendation": "التوصية",
      "stopReasons": "إشارات الاستدلال",
      "modeValues": {
        "structured": "مقارنة ذكية",
        "generic": "مقارنة قياسية"
      },
      "roleValues": {
        "target": "هدف التحسين",
        "baseline": "الإصدار السابق",
        "reference": "المعلّم",
        "referenceBaseline": "الإصدار السابق للمعلّم",
        "replica": "إعادة اختبار",
        "auxiliary": "اختبار آخر"
      },
      "verdictValues": {
        "left-better": "اليسار أفضل",
        "right-better": "اليمين أفضل",
        "mixed": "مختلط",
        "similar": "متشابه"
      },
      "confidenceValues": {
        "low": "ثقة منخفضة",
        "medium": "ثقة متوسطة",
        "high": "ثقة عالية"
      },
      "conflictSignalValues": {
        "improvementNotSupportedOnReference": "تحسّن هدف التحسين عن الإصدار السابق، لكن نفس تغيير الموجّه غير مدعوم على جانب المعلّم.",
        "improvementUnstableAcrossReplicas": "تحسّن الهدف، لكن أدلة فحص الاستقرار تشير إلى أن المكسب قد يكون غير مستقر.",
        "regressionOutweighsCosmeticGains": "يجب أن يفوق التراجع مقابل الإصدار السابق التحسينات التجميلية في أماكن أخرى.",
        "sampleOverfitRiskVisible": "تتعايش المكاسب القابلة لإعادة الاستخدام ومكاسب تلاؤم العينات، لذا الاستنتاج الأكثر أمانًا هو إبقاء خطر الإفراط في الملاءمة مرئيًا."
      },
      "signalValues": {
        "targetVsBaseline": {
          "improved": "تحسّن",
          "flat": "ثابت تقريبًا",
          "regressed": "تراجع"
        },
        "targetVsReferenceGap": {
          "none": "فجوة صغيرة جدًا",
          "minor": "تبقى بعض الفجوة",
          "major": "فجوة واضحة"
        },
        "improvementHeadroom": {
          "none": "تقريبًا لا شيء",
          "low": "منخفض",
          "medium": "متوسط",
          "high": "عالٍ"
        },
        "overfitRisk": {
          "low": "منخفض",
          "medium": "متوسط",
          "high": "عالٍ"
        },
        "stopRecommendation": {
          "continue": "استمر في التكرار",
          "stop": "توقّف الآن",
          "review": "يحتاج إلى مراجعة"
        }
      }
    },
    "level": {
      "excellent": "ممتاز",
      "good": "جيد",
      "acceptable": "مقبول",
      "poor": "ضعيف",
      "veryPoor": "ضعيف جدًا"
    },
    "dimension": {
      "goalAchievement": "تحقيق الهدف",
      "outputQuality": "جودة المخرجات",
      "formatCompliance": "الالتزام بالصيغة",
      "relevance": "الصلة"
    },
    "optimizedBetter": "الإصدار المُحسَّن أفضل",
    "originalBetter": "الإصدار الأصلي أفضل",
    "syntheticInput": {
      "noExplicitText": "لم يتم تقديم مدخل اختبار إضافي؛ تُولَّد المخرجات مباشرة من الموجّه الحالي.",
      "noExplicitVariables": "لا يوجد إدخال متغيرات إضافي."
    },
    "error": {
      "title": "فشل التقييم",
      "serviceNotReady": "خدمة التقييم غير جاهزة، يرجى المحاولة لاحقًا",
      "failed": "فشل التقييم: {error}",
      "noOptimizedPrompt": "لا يوجد موجّه لتحسينه"
    },
    "designContext": {
      "basic": "سياق التصميم",
      "advanced": "سياق التصميم"
    },
    "variableExtraction": {
      "extractButton": "استخراج المتغيرات تلقائيًا",
      "extracting": "جارٍ الاستخراج...",
      "dialogTitle": "نتائج الاستخراج التلقائي",
      "variableName": "اسم المتغير",
      "variableValue": "قيمة المتغير",
      "reason": "السبب",
      "category": "الفئة",
      "selected": "محدّد",
      "batchCreate": "إنشاء دفعي",
      "noVariables": "لم يتم تحديد متغيرات قابلة للاستخراج",
      "extractFailed": "فشل الاستخراج التلقائي",
      "createSuccess": "تم إنشاء {count} من المتغيرات بنجاح",
      "summary": "ملخص",
      "workspaceNotReady": "غير قادر على الوصول إلى حالة مساحة العمل",
      "noPromptContent": "يرجى إدخال محتوى الموجّه أولاً",
      "noEvaluationModel": "يرجى اختيار نموذج تقييم أولاً",
      "serviceNotReady": "خدمة استخراج المتغيرات غير جاهزة",
      "invalidVariableNames": "أسماء متغيرات غير صالحة (لا يمكن أن تبدأ برقم أو # / ^ ! > &؛ بدون مسافات/أقواس؛ الحد الأقصى {max} حرف): {names}"
    },
    "diagnose": {
      "title": "تحليل التشخيص",
      "confidence": "الثقة",
      "findings": "النتائج",
      "patchPlan": "خطة التصحيح",
      "noFindings": "لم يتم العثور على مشاكل",
      "noPatchPlan": "لا توجد خطة تصحيح",
      "applyFix": "تطبيق الإصلاح",
      "replaceNow": "استبدال الآن",
      "invariantsWarning": "مقيّد بالثوابت",
      "changeBudgetWarning": "مقيّد بميزانية التغيير",
      "status": {
        "ok": "التشخيص ناجح",
        "degraded": "متدهور جزئيًا",
        "failed": "فشل التشخيص"
      },
      "severity": {
        "critical": "حرج",
        "major": "كبير",
        "minor": "صغير",
        "suggestion": "اقتراح",
        "unknown": "غير معروف"
      },
      "anchorType": {
        "text": "نص",
        "section": "قسم",
        "pattern": "نمط"
      },
      "operation": {
        "insert": "إدراج",
        "replace": "استبدال",
        "delete": "حذف"
      },
      "anchorPosition": {
        "before": "قبل",
        "after": "بعد",
        "replace": "استبدال"
      },
      "invariantsRisks": "مخاطر الثوابت"
    }
  }
} as const;

export default messages;
