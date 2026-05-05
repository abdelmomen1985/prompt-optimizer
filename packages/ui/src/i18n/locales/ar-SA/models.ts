const messages = {
  "modelManager": {
    "title": "مدير النماذج",
    "textModels": "النماذج النصية",
    "imageModels": "نماذج الصور",
    "functionModels": "نماذج الوظائف",
    "modelList": "قائمة النماذج",
    "testConnection": "اختبار الاتصال",
    "editModel": "تعديل",
    "deleteModel": "حذف",
    "displayName": "الاسم المعروض",
    "enabled": "مُفعَّل",
    "enabledStatus": "حالة التفعيل",
    "modelKey": "مفتاح النموذج",
    "apiUrl": "عنوان API",
    "apiUrlHint": "مثال: https://api.example.com/v1؛ معظم المزوّدين يستخدمون نقاط نهاية تنتهي بـ /v1",
    "apiUrlHintAriaLabel": "عرض مساعدة عنوان API",
    "defaultModel": "النموذج الافتراضي",
    "clickToFetchModels": "انقر السهم لجلب قائمة النماذج",
    "apiKey": "مفتاح API",
    "getApiKey": "احصل على مفتاح API",
    "addModel": "إضافة",
    "addImageModel": "إضافة نموذج صورة",
    "provider": {
      "section": "إعدادات المزوّد",
      "label": "المزوّد",
      "placeholder": "اختر المزوّد",
      "openaiHint": "هذه واجهة OpenAI الرسمية. إذا أردت عنوانًا أساسيًا مخصّصًا أو خدمة طرف ثالث متوافقة أو نموذجًا محليًا، فاختر \"API مخصّص (متوافق مع OpenAI)\" بدلاً من ذلك.",
      "customApiHint": "استخدم هذا لنقاط النهاية المخصّصة المتوافقة مع OpenAI. يمكنك تكوين العنوان الأساسي واستخدام اسم نموذجك الخاص واختيار Chat Completions أو Responses كأسلوب طلب.",
      "dashscopeHint": "يدعم DashScope كلاً من Chat Completions و Responses المتوافقَين مع OpenAI. يمكنك التبديل بين أسلوب الطلب من هنا مباشرة.",
      "minimaxHint": "نقطة النهاية الافتراضية هي واجهة MiniMax العالمية المتوافقة مع OpenAI. يجب على مستخدمي البر الرئيسي للصين تعيين عنوان API إلى https://api.minimaxi.com/v1. لا تستخدم نقاط نهاية MiniMax بصيغة Anthropic هنا."
    },
    "connection": {
      "accountId": "معرّف الحساب",
      "requestStyle": "أسلوب الطلب",
      "requestStyleOptions": {
        "chatCompletions": "Chat Completions",
        "responses": "Responses"
      }
    },
    "model": {
      "section": "إعدادات النموذج"
    },
    "advancedParameters": {
      "title": "المعاملات المتقدمة",
      "noParamsConfigured": "لم يتم تكوين أي معاملات متقدمة",
      "customParam": "مخصّص",
      "advancedTag": "متقدم",
      "add": "إضافة معامل",
      "select": "اختر معاملًا",
      "selectTitle": "إضافة معامل متقدم",
      "custom": "معامل مخصّص",
      "customKeyPlaceholder": "أدخل اسم المعامل",
      "customValuePlaceholder": "أدخل قيمة المعامل",
      "stopSequencesPlaceholder": "أدخل تسلسلات الإيقاف (مفصولة بفواصل)",
      "unitLabel": "الوحدة",
      "currentProvider": "المزوّد الحالي",
      "customProvider": "مخصّص",
      "availableParams": "معاملات متاحة",
      "noAvailableParams": "لا توجد معاملات متاحة",
      "validation": {
        "unknownParam": "لم يتم العثور على تعريف المعامل",
        "customKeyRequired": "اسم المعامل مطلوب",
        "customValueRequired": "قيمة المعامل مطلوبة",
        "duplicateParam": "المعامل موجود بالفعل",
        "dangerousParam": "هذا المعامل يُعتبر خطيرًا وغير مسموح به",
        "invalidNumber": "يجب أن يكون رقمًا صالحًا",
        "belowMin": "لا يمكن أن تكون القيمة أقل من {min}",
        "aboveMax": "لا يمكن أن تكون القيمة أكبر من {max}",
        "mustBeInteger": "يجب أن يكون عددًا صحيحًا"
      }
    },
    "modelKeyPlaceholder": "أدخل مفتاح النموذج",
    "displayNamePlaceholder": "أدخل الاسم المعروض",
    "apiUrlPlaceholder": "https://api.example.com/v1",
    "defaultModelPlaceholder": "اكتب أو اختر اسم نموذج",
    "apiKeyPlaceholder": "أدخل مفتاح API (اختياري)",
    "modelKeyRequired": "مفتاح النموذج مطلوب",
    "modelKeyReserved": "مفتاح النموذج \"{id}\" يتعارض مع نموذج مدمج. يرجى اختيار مفتاح آخر، أو تعديل إعدادات النموذج المدمج بدلاً من ذلك.",
    "modelKeyAlreadyExists": "مفتاح النموذج \"{id}\" موجود بالفعل. يرجى اختيار مفتاح آخر.",
    "modelIdGenerateFailed": "فشل توليد معرّف نموذج فريد. يرجى المحاولة مرة أخرى.",
    "deleteConfirm": "هل أنت متأكد من حذف هذا النموذج؟ لا يمكن التراجع عن هذا الإجراء.",
    "testing": "جارٍ اختبار الاتصال...",
    "testSuccess": "تم الاتصال بنجاح بـ {provider}!",
    "testFailed": "فشل الاتصال بـ {provider}: {error}",
    "updateSuccess": "تم التحديث بنجاح",
    "updateFailed": "فشل التحديث: {error}",
    "addSuccess": "تمت إضافة النموذج بنجاح",
    "addFailed": "فشل إضافة النموذج: {error}",
    "createSuccess": "تم إنشاء النموذج بنجاح",
    "createFailed": "فشل إنشاء النموذج: {error}",
    "enableSuccess": "تم تفعيل النموذج",
    "enableFailed": "فشل تفعيل النموذج: {error}",
    "disableSuccess": "تم تعطيل النموذج",
    "disableFailed": "فشل تعطيل النموذج: {error}",
    "cloneModel": "استنساخ",
    "cloneSuccess": "تم استنساخ النموذج",
    "cloneFailed": "فشل استنساخ النموذج",
    "deleteSuccess": "تم حذف النموذج",
    "deleteFailed": "فشل حذف النموذج: {error}",
    "toggleFailed": "فشل التبديل: {error}",
    "fetchModelsSuccess": "تم جلب نموذج واحد بنجاح | تم جلب {count} نموذج بنجاح",
    "loadingModels": "جارٍ تحميل خيارات النماذج...",
    "noModelsAvailable": "لا توجد نماذج متاحة",
    "selectModel": "اختر نموذجًا",
    "fetchModelsFailed": "فشل جلب النماذج: {error}",
    "fetchModelsFallback": "فشل جلب النماذج: {error} (تم الرجوع إلى {count} من النماذج الافتراضية)",
    "needApiKeyAndBaseUrl": "يرجى تعبئة مفتاح API والعنوان الأساسي أولاً",
    "needBaseUrl": "يرجى تعبئة عنوان API أولاً",
    "corsRestrictedTag": "مقيّد بـ CORS",
    "corsRestrictedConfirm": "{provider} لديه قيود CORS في المتصفح، وقد يفشل اختبار الاتصال في الويب.\n\nهذا لا يعني أن مفتاح API الخاص بك غير صالح، بل أن سياسة أمان المتصفح حجبت الطلب.\nيُوصى باستخدام تطبيق سطح المكتب، أو التأكد من أن هذا المزوّد يدعم الوصول المباشر من المتصفح.\n\nمتابعة الاختبار؟",
    "errors": {
      "crossOriginConnectionFailed": "فشل الاتصال عبر الأصول المختلفة. يرجى التحقق من الاتصال بالشبكة",
      "connectionFailed": "فشل الاتصال. يرجى التحقق من عنوان API والاتصال بالشبكة",
      "missingV1Suffix": "خطأ في تنسيق عنوان API. يجب أن تتضمن الواجهات المتوافقة مع OpenAI اللاحقة \"/v1\"",
      "invalidResponseFormat": "تنسيق استجابة API غير متوافق. يرجى التحقق من أن خدمة API تستخدم تنسيقًا متوافقًا مع OpenAI",
      "emptyModelList": "أعادت API قائمة نماذج فارغة. قد لا يكون لهذه الخدمة نماذج متاحة",
      "apiError": "خطأ في API: {error}"
    },
    "capabilities": {
      "tools": "استدعاء الأدوات",
      "reasoning": "التفكير",
      "vision": "الرؤية"
    },
    "disabled": "مُعطَّل",
    "testConnectionAriaLabel": "اختبار الاتصال بـ {name}",
    "editModelAriaLabel": "تعديل النموذج {name}",
    "enableModelAriaLabel": "تفعيل النموذج {name}",
    "disableModelAriaLabel": "تعطيل النموذج {name}",
    "deleteModelAriaLabel": "حذف النموذج {name}",
    "displayNameAriaLabel": "الاسم المعروض للنموذج",
    "apiUrlAriaLabel": "عنوان API للنموذج",
    "defaultModelAriaLabel": "اسم النموذج الافتراضي",
    "apiKeyAriaLabel": "مفتاح API",
    "cancelEditAriaLabel": "إلغاء تعديل النموذج",
    "saveEditAriaLabel": "حفظ تغييرات النموذج",
    "cancelAddAriaLabel": "إلغاء إضافة النموذج",
    "confirmAddAriaLabel": "تأكيد إضافة النموذج"
  },
  "functionModel": {
    "evaluationModel": "نموذج التقييم",
    "evaluationModelHint": "يُستخدم للتقييم الذكي واستخراج المتغيرات، ويعود افتراضيًا إلى نموذج التحسين العام",
    "imageRecognitionModel": "نموذج التعرف على الصور",
    "imageRecognitionModelHint": "يُستخدم لاستخراج موجّهات JSON والقيم الافتراضية للمتغيرات من الصور، ويجب تكوينه بشكل منفصل",
    "noImageRecognitionModel": "يرجى تكوين نموذج للتعرف على الصور في نماذج الوظائف أولاً",
    "unsupportedImageRecognitionModel": "لا يدعم نموذج التعرف على الصور الحالي استخراج الصور: {provider}"
  },
  "model": {
    "select": {
      "placeholder": "يرجى اختيار نموذج",
      "configure": "تهيئة النموذج",
      "noModels": "لا يوجد نموذج",
      "noAvailableModels": "لا توجد نماذج متاحة"
    },
    "manager": {
      "displayName": "مثال: نموذج مخصّص",
      "apiUrl": "عنوان API",
      "defaultModel": "اسم النموذج الافتراضي",
      "modelNamePlaceholder": "مثال: gpt-3.5-turbo"
    }
  },
  "params": {
    "temperature": {
      "label": "درجة الحرارة",
      "description": "تتحكم في العشوائية: القيم الأقل (مثل 0.2) تجعل المخرجات أكثر تركيزًا وحتمية، بينما القيم الأعلى (مثل 0.8) تجعلها أكثر عشوائية."
    },
    "top_p": {
      "label": "Top P",
      "description": "أخذ عينات النواة. يأخذ في الاعتبار الرموز ذات أعلى كتلة احتمالية P. مثال: 0.1 تعني أن الرموز التي تشكّل أعلى 10% من كتلة الاحتمالية فقط هي التي تُؤخذ في الاعتبار."
    },
    "max_tokens": {
      "label": "الحد الأقصى للرموز",
      "description": "الحد الأقصى لعدد الرموز التي يتم توليدها في الإكمال."
    },
    "presence_penalty": {
      "label": "عقوبة التواجد",
      "description": "رقم بين -2.0 و 2.0. القيم الموجبة تعاقب الرموز الجديدة بناءً على ظهورها في النص حتى الآن، مما يزيد من احتمال تطرق النموذج إلى مواضيع جديدة."
    },
    "frequency_penalty": {
      "label": "عقوبة التكرار",
      "description": "رقم بين -2.0 و 2.0. القيم الموجبة تعاقب الرموز الجديدة بناءً على تكرارها الحالي في النص، مما يقلل من احتمال تكرار النموذج للسطر نفسه حرفيًا."
    },
    "timeout": {
      "label": "المهلة (مللي ثانية)",
      "description_openai": "مهلة الطلب بالمللي ثانية لاتصال عميل OpenAI."
    },
    "maxOutputTokens": {
      "label": "الحد الأقصى لرموز المخرجات",
      "description": "الحد الأقصى لعدد الرموز التي يمكن للنموذج إنتاجها في استجابة واحدة."
    },
    "top_k": {
      "label": "Top K",
      "description": "يصفّي خيارات الرمز التالي إلى أعلى K من الرموز المرجّحة. يساعد في تقليل توليد الرموز غير المنطقية."
    },
    "candidateCount": {
      "label": "عدد المرشحين",
      "description": "عدد الاستجابات المُولَّدة المراد إعادتها. يجب أن يكون بين 1 و 8."
    },
    "stopSequences": {
      "label": "تسلسلات الإيقاف",
      "description": "سلاسل مخصّصة ستوقف توليد المخرجات إذا تمت مصادفتها. حدّد عدة تسلسلات مفصولة بفواصل."
    },
    "thinkingBudget": {
      "label": "ميزانية التفكير",
      "description": "الحد الأقصى لعدد الرموز المخصّصة لعملية تفكير النموذج (Gemini 2.5+ فقط). النطاق: 1-8192 رمز."
    },
    "includeThoughts": {
      "label": "تضمين الأفكار",
      "description": "ما إذا كان يتم تضمين عملية تفكير النموذج في الاستجابة (Gemini 2.5+ فقط). عند التفعيل، يمكنك رؤية خطوات تفكير النموذج."
    },
    "reasoning_effort": {
      "label": "جهد التفكير",
      "description": "يتحكم في جهد التفكير للنماذج التي تدعم وضع التفكير."
    },
    "deepseek": {
      "thinking_type": {
        "label": "وضع التفكير",
        "description": "يتحكم في وضع تفكير DeepSeek. يُرسل كـ thinking.type في طلب API.",
        "disabled": "مُعطَّل",
        "enabled": "مُفعَّل"
      }
    },
    "tokens": {
      "unit": "رمز"
    },
    "size": {
      "label": "حجم الصورة",
      "description": "دقة/حجم الصورة المُولَّدة، مثال: 1024x1024"
    },
    "quality": {
      "label": "جودة الصورة",
      "description": "مستوى جودة الصورة المُولَّدة: auto (تلقائي)، high (جودة عالية)، medium (متوسطة)، low (جودة منخفضة)"
    },
    "background": {
      "label": "شفافية الخلفية",
      "description": "ضبط خلفية الصورة: auto (تلقائي)، transparent (شفاف)، opaque (معتم)"
    },
    "imageSize": {
      "label": "حجم الصورة",
      "description": "دقة/حجم الصورة المُولَّدة، مثال: 1024x1024"
    },
    "steps": {
      "label": "الخطوات",
      "description": "خطوات الانتشار/الاستدلال؛ المزيد من الخطوات يحسّن الجودة عادةً ولكن يستغرق وقتًا أطول"
    },
    "guidance": {
      "label": "مقياس التوجيه",
      "description": "قوة اتباع الموجّه؛ القيم الأعلى تلتزم أكثر بالموجّه"
    },
    "cfg": {
      "label": "مقياس CFG",
      "description": "مقياس Classifier-Free Guidance للتحكم في الالتزام بالموجّه (Qwen-Image فقط)"
    },
    "negativePrompt": {
      "label": "الموجّه السلبي",
      "description": "المحتوى أو الأنماط التي لا تريدها في الصورة"
    },
    "responseFormat": {
      "label": "تنسيق الاستجابة",
      "description": "تنسيق الصورة المُعادة (URL أو Base64)"
    },
    "outputFormat": {
      "label": "تنسيق المخرجات",
      "description": "تنسيق ملف الصورة المُولَّدة (مثل PNG أو JPEG أو WebP)"
    },
    "watermark": {
      "label": "علامة مائية",
      "description": "ما إذا كان يتم إضافة علامة مائية إلى الصورة المُولَّدة"
    },
    "sequentialGeneration": {
      "label": "التوليد المتسلسل",
      "description": "التحكم في وضع التوليد المتسلسل للصور (للنماذج المدعومة)"
    },
    "tools": {
      "label": "الأدوات",
      "description": "قائمة أدوات إضافية لسلسلة 5.0، اسم أداة واحد لكل سطر"
    },
    "seed": {
      "label": "البذرة",
      "description": "بذرة عشوائية للتحكم في نتائج التوليد، نفس البذرة تُنتج نفس المخرجات"
    },
    "enable_thinking": {
      "label": "تمكين التفكير",
      "description": "تمكين وضع التفكير لمهام التفكير المعقّدة (للنماذج المدعومة فقط)"
    },
    "thinking_budget": {
      "label": "ميزانية التفكير",
      "description": "الحد الأقصى للرموز لعملية التفكير، يحدّ من طول التفكير"
    },
    "enable_search": {
      "label": "تمكين البحث",
      "description": "تمكين البحث على الإنترنت للمعلومات الفورية (للنماذج المدعومة فقط)"
    },
    "max_completion_tokens": {
      "label": "الحد الأقصى لرموز الإكمال",
      "description": "الحد الأقصى لعدد الرموز التي يتم توليدها في الإكمال (موصى به، يحلّ محل max_tokens). النطاق: 1-1,000,000."
    },
    "logprobs": {
      "label": "احتمالات اللوغاريتم",
      "description": "ما إذا كانت تُرجع احتمالات اللوغاريتم لرموز المخرجات في الاستجابة. عند التفعيل، يمكنك رؤية ثقة النموذج لكل رمز."
    },
    "top_logprobs": {
      "label": "عدد أعلى احتمالات اللوغاريتم",
      "description": "عدد الرموز الأكثر احتمالًا التي يجب إعادتها مع احتمالات اللوغاريتم لكل موضع. النطاق: 0-20. يتطلب تفعيل logprobs أولاً."
    },
    "n": {
      "label": "عدد الإكمالات",
      "description": "كم عدد خيارات الإكمال التي يتم توليدها لكل إدخال. النطاق: 1-128. ملاحظة: توليد نتائج متعددة يستهلك حصة رموز أكبر."
    }
  }
} as const;

export default messages;
