const messages = {
  "imageMode": {
    "text2image": "نص إلى صورة",
    "image2image": "صورة إلى صورة",
    "multiimage": "متعدد الصور",
    "text2imageDescription": "توليد صور من أوصاف نصية",
    "image2imageDescription": "تعديل بناءً على صور موجودة",
    "multiimageDescription": "التوليد من عدة صور إدخال وموجّه",
    "uploadRequired": "يتطلب وضع تحويل الصورة إلى صورة رفع صورة مرجعية أولاً"
  },
  "imageWorkspace": {
    "input": {
      "originalPrompt": "الموجّه الأصلي",
      "originalPromptPlaceholder": "أدخل موجّه توليد الصورة لتحسينه",
      "multiImagePromptPlaceholder": "استخدم Image 1 / Image 2 / Image 3 لوصف العلاقات بين الصور وهدف التوليد",
      "image": "صورة",
      "imageAlt": "الصورة {index}",
      "imageLabel": "الصورة {index}",
      "removeImageAriaLabel": "إزالة الصورة {index}",
      "reorderImageAriaLabel": "اسحب لإعادة ترتيب الصورة {index}",
      "multiImageHint": "اسحب البطاقات للتحكم في الترتيب الدلالي للصورة 1 / الصورة 2 / الصورة 3",
      "multiImageMinHint": "أضف صورة أخرى لبدء توليد متعدد الصور",
      "multiImageReadyHint": "ارفع صورتين على الأقل قبل بدء توليد متعدد الصور",
      "selectImage": "📁 اختيار",
      "optimizeTemplate": "قالب التحسين",
      "templatePlaceholder": "يرجى اختيار القالب",
      "textModel": "النموذج النصي",
      "modelPlaceholder": "اختر نموذجًا",
      "optimizing": "جارٍ التحسين...",
      "optimizePrompt": "تحسين الموجّه",
      "extractFromImage": "صورة مرجعية",
      "extracting": "جارٍ الاستخراج",
      "extractCompleted": "اكتمل استخراج الصورة",
      "extractCompletedWithVariables": "اكتمل استخراج الصورة وتمت تهيئة {count} من المتغيرات المحلية",
      "extractFailed": "فشل استخراج الصورة"
    },
    "referenceImage": {
      "replicateAction": "تكرار",
      "replicateActionDescription": "تجاهل الموجّه الحالي واستنتج موجّهًا قابلًا لإعادة الاستخدام من الصورة المرجعية",
      "styleLearnAction": "تعلم النمط",
      "styleLearnActionDescription": "احتفظ بالموضوع الحالي وتعلّم النمط والتأليف ولغة الألوان من الصورة",
      "styleLearnDisabledHint": "أدخل ما تريد توليده أولاً",
      "processingStatus": "جارٍ المعالجة",
      "readyStatus": "جاهز",
      "errorStatus": "فشل",
      "resultTitle": "نتيجة المرجع",
      "thumbnailAlt": "صورة مصغّرة للمرجع",
      "generatedPrompt": "الموجّه المُولَّد",
      "variablePreview": "المتغيرات المُستخرجة",
      "noVariables": "لم يتم استخراج أي متغيرات بعد",
      "applyToPrompt": "تطبيق على الموجّه الحالي",
      "applySuccess": "تم الإدراج في الموجّه الحالي"
    },
    "generation": {
      "imageModel": "نموذج الصورة",
      "imageModelPlaceholder": "يرجى اختيار نموذج صورة",
      "compareMode": "وضع المقارنة",
      "generating": "جارٍ التوليد...",
      "generateImage": "توليد الصورة",
      "processing": "جارٍ المعالجة",
      "validationFailed": "الإعداد/النموذج المحدّد لا يدعم هذه العملية",
      "generateFailed": "فشل توليد الصورة",
      "missingRequiredFields": "يرجى اختيار نموذج صورة وإدخال موجّه صالح",
      "missingVariables": "متغيرات مفقودة أو فارغة: {vars}",
      "forbiddenTemplateSyntax": "صياغة Mustache غير المُهرَّبة (مثل الأقواس الثلاثية أو وسوم العطف) غير مدعومة. يرجى استخدام عناصر نائبة عادية للمتغيرات.",
      "inputImageRequired": "يرجى رفع صورة إدخال (مطلوبة لتحويل الصورة إلى صورة)",
      "multiImageUnsupported": "لا يدعم هذا النموذج إدخال صور متعددة. يرجى التبديل إلى نموذج صورة يدعم متعدد الصور.",
      "generationCompleted": "اكتمل توليد الصورة"
    },
    "results": {
      "originalPromptResult": "الموجّه الأصلي",
      "optimizedPromptResult": "الموجّه المُحسَّن",
      "testResult": "نتيجة الاختبار",
      "download": "تنزيل",
      "downloadFailed": "فشل التنزيل",
      "copyBase64": "نسخ Base64",
      "copyText": "نسخ النص",
      "copySuccess": "تم النسخ بنجاح",
      "copyError": "فشل النسخ",
      "textOutput": "مخرجات نصية",
      "noOriginalResult": "لا توجد نتيجة أصلية",
      "noOptimizedResult": "لا توجد نتيجة محسّنة",
      "noGenerationResult": "لا توجد نتيجة توليد"
    },
    "upload": {
      "title": "رفع صورة مرجعية",
      "dragText": "انقر أو اسحب لرفع صورة",
      "fileRequirements": "يدعم تنسيق PNG/JPEG، حجم الملف لا يتجاوز 10 ميجابايت",
      "uploadFailed": "فشل الرفع",
      "uploadSuccess": "تم الرفع بنجاح",
      "fileTypeNotSupported": "يتم دعم PNG/JPEG فقط",
      "fileTooLarge": "لا يمكن أن يتجاوز حجم الملف 10 ميجابايت",
      "readFailed": "فشلت قراءة الملف، يرجى المحاولة مرة أخرى"
    }
  },
  "image": {
    "capability": {
      "text2image": "نص إلى صورة",
      "image2image": "صورة إلى صورة",
      "multiImage": "متعدد الصور",
      "highResolution": "دقة عالية"
    },
    "step": {
      "basic": "معلومات أساسية",
      "provider": "اختيار المزوّد",
      "connection": "إعدادات الاتصال",
      "model": "اختيار النموذج",
      "parameters": "إعدادات المعاملات"
    },
    "config": {
      "basic": {
        "title": "الإعدادات الأساسية"
      },
      "name": {
        "label": "اسم الإعداد",
        "placeholder": "يرجى إدخال اسم الإعداد"
      },
      "displayName": {
        "label": "الاسم المعروض",
        "placeholder": "يرجى إدخال الاسم المعروض"
      },
      "enabled": {
        "label": "حالة التفعيل"
      },
      "enabledStatus": {
        "label": "حالة التفعيل"
      },
      "updateSuccess": "تم تحديث الإعداد",
      "createSuccess": "تم إنشاء الإعداد",
      "saveFailed": "فشل حفظ الإعداد",
      "loadFailed": "فشل تحميل الإعدادات"
    },
    "provider": {
      "title": "اختيار المزوّد",
      "section": "إعدادات المزوّد",
      "label": "مزوّد الصورة",
      "placeholder": "يرجى اختيار المزوّد",
      "loadFailed": "فشل تحميل المزوّدين"
    },
    "connection": {
      "title": "إعدادات الاتصال",
      "test": "اختبار الاتصال",
      "testing": "جارٍ اختبار الاتصال...",
      "testSuccess": "نجح اختبار الوظيفة",
      "testFailed": "فشل اختبار الاتصال",
      "testError": "خطأ في اختبار الاتصال",
      "functionTestTextToImage": "اختبار تحويل النص إلى صورة",
      "functionTestImageToImage": "اختبار تحويل الصورة إلى صورة",
      "testImagePreview": "معاينة صورة الاختبار",
      "downloadSuccess": "تم تنزيل الصورة بنجاح",
      "downloadFailed": "فشل تنزيل الصورة",
      "apiKey": {
        "label": "مفتاح API",
        "description": "مفتاح المصادقة",
        "placeholder": "أدخل مفتاح API"
      },
      "baseURL": {
        "label": "عنوان API الأساسي",
        "description": "العنوان الأساسي لنقطة نهاية الخدمة",
        "placeholder": "https://api.example.com/v1"
      },
      "accountId": {
        "label": "معرّف الحساب",
        "description": "معرّف حساب Cloudflare",
        "placeholder": "أدخل معرّف حساب Cloudflare"
      },
      "organization": {
        "label": "المؤسسة (اختياري)",
        "description": "معرّف مؤسسة OpenAI إن وُجد",
        "placeholder": "org_xxx"
      },
      "validation": {
        "missing": "حقول مطلوبة مفقودة: {fields}",
        "invalidType": "يجب أن يكون {field} من نوع {expected}، الحالي {actual}"
      }
    },
    "model": {
      "section": "إعدادات النموذج",
      "label": "النموذج",
      "placeholder": "يرجى اختيار النموذج",
      "loading": "جارٍ تحميل النماذج...",
      "refreshTooltip": "تحديث قائمة النماذج",
      "refreshDisabledTooltip": {
        "dynamicNotSupported": "لا يدعم المزوّد الحالي تحميل النماذج ديناميكيًا",
        "connectionRequired": "يلزم إعداد اتصال صالح لتحديث النماذج"
      },
      "refreshSuccess": "تم تحديث قائمة النماذج",
      "refreshError": "فشل تحديث قائمة النماذج",
      "selectRequired": "يرجى اختيار نموذج للاختبار",
      "count": "{count} نموذج",
      "capabilities": "القدرات",
      "empty": "لا توجد إعدادات لنموذج صورة",
      "addFirst": "إضافة أول نموذج صورة",
      "staticLoaded": "تم تحميل النماذج الثابتة",
      "noStaticModels": "لا توجد نماذج ثابتة",
      "staticLoadFailed": "فشل تحميل النماذج الثابتة",
      "dynamicLoaded": "تم تحميل النماذج الديناميكية",
      "dynamicFailed": "فشل تحميل النماذج الديناميكية، تم الرجوع إلى القائمة الثابتة",
      "connectionRequired": "يرجى تعبئة الاتصال والتحقق منه أولاً",
      "refreshFailed": "فشل تحديث النماذج"
    },
    "parameters": {
      "noParameters": "لا توجد معاملات قابلة للتكوين لهذا النموذج",
      "advancedConfig": "إعدادات المعاملات المتقدمة",
      "advancedConfigDescription": "اختياري، يُستخدم لتجاوز معاملات النموذج الافتراضية"
    },
    "params": {
      "size": {
        "label": "حجم الصورة",
        "description": "دقة/حجم الصورة المُولَّدة، مثال: 1024x1024"
      },
      "quality": {
        "label": "جودة الصورة",
        "description": "مستوى جودة الصورة المُولَّدة: auto (تلقائي)، high (جودة عالية)، medium (متوسطة)، low (منخفضة)"
      },
      "background": {
        "label": "شفافية الخلفية",
        "description": "ضبط خلفية الصورة: auto (تلقائي)، transparent (شفاف)، opaque (معتم)"
      },
      "negativePrompt": {
        "label": "الموجّه السلبي",
        "description": "حدّد المحتوى الذي لا تريد أن يظهر في الصورة المُولَّدة"
      },
      "promptExtend": {
        "label": "تمديد الموجّه",
        "description": "عند التفعيل، سيقوم النموذج بتوسيع الموجّه وتحسينه تلقائيًا للحصول على نتائج أفضل"
      },
      "watermark": {
        "label": "علامة مائية",
        "description": "ما إذا كان يتم إضافة علامة مائية إلى الصورة المُولَّدة"
      },
      "seed": {
        "label": "بذرة عشوائية",
        "description": "بذرة عشوائية لنتائج قابلة للتكرار، نفس البذرة تُولِّد صورًا متشابهة"
      },
      "count": {
        "label": "عدد التوليد",
        "description": "عدد الصور التي يتم توليدها مرة واحدة"
      },
      "style": {
        "label": "نمط الصورة",
        "description": "النمط الفني للصورة المُولَّدة"
      }
    }
  },
  "toolCall": {
    "title": "استدعاءات الأدوات",
    "count": "{count} استدعاء",
    "arguments": "الوسائط",
    "result": "النتيجة",
    "error": "خطأ",
    "status": {
      "pending": "قيد الانتظار",
      "success": "نجاح",
      "error": "فشل"
    }
  },
  "updater": {
    "title": "تحديثات التطبيق",
    "checkForUpdates": "البحث عن تحديثات",
    "currentVersion": "الإصدار الحالي",
    "versionLoadFailed": "فشل تحميل الإصدار",
    "downloadFailed": "فشل التنزيل",
    "dismiss": "تجاهل",
    "noStableVersionAvailable": "لا يتوفر إصدار مستقر",
    "noPrereleaseVersionAvailable": "لا يتوفر إصدار تجريبي",
    "failedToGetStableInfo": "فشل الحصول على معلومات تحديث الإصدار المستقر",
    "failedToGetPrereleaseInfo": "فشل الحصول على معلومات تحديث الإصدار التجريبي",
    "alreadyLatestStable": "تستخدم بالفعل أحدث إصدار مستقر ({version})",
    "alreadyLatestPrerelease": "تستخدم بالفعل أحدث إصدار تجريبي ({version})",
    "stableDownloadFailed": "فشل تنزيل الإصدار المستقر: {error}",
    "prereleaseDownloadFailed": "فشل تنزيل الإصدار التجريبي: {error}",
    "unknownError": "خطأ غير معروف",
    "stable": "مستقر",
    "prerelease": "تجريبي",
    "downloadFailedGeneric": "فشل تنزيل {type}: {error}",
    "warning": "تحذير",
    "info": "معلومات",
    "versionIgnored": "تم تجاهل الإصدار {version}",
    "checkFailed": "فشل الفحص",
    "ignored": "متجاهَل",
    "unignore": "إلغاء التجاهل",
    "latestVersion": "أحدث إصدار",
    "noPrereleaseAvailable": "لا يتوفر إصدار تجريبي",
    "latestIsStable": "أحدث إصدار هو مستقر",
    "latestStableVersion": "أحدث إصدار مستقر",
    "latestPrereleaseVersion": "أحدث إصدار تجريبي",
    "viewStable": "عرض المستقر",
    "viewPrerelease": "عرض التجريبي",
    "allowPrerelease": "تلقّي تحديثات الإصدارات التجريبية",
    "noUpdatesAvailable": "تستخدم أحدث إصدار",
    "checkNow": "البحث عن تحديثات",
    "checking": "جارٍ البحث عن تحديثات...",
    "checkingForUpdates": "جارٍ البحث عن تحديثات...",
    "newVersionAvailable": "إصدار جديد متاح",
    "viewDetails": "عرض التفاصيل",
    "downloadUpdate": "تنزيل التحديث",
    "download": "تنزيل",
    "updateAvailable": "تحديث متاح",
    "hasUpdate": "تحديث متاح",
    "details": "تفاصيل",
    "ignore": "تجاهل",
    "ignoreVersion": "تجاهل هذا الإصدار",
    "downloading": "جارٍ تنزيل التحديث...",
    "downloadingShort": "جارٍ التنزيل...",
    "downloadComplete": "اكتمل التنزيل",
    "clickInstallToRestart": "انقر الزر أدناه لتثبيت وإعادة تشغيل التطبيق",
    "installAndRestart": "التثبيت وإعادة التشغيل",
    "updateError": "فشل التحديث",
    "downloadError": "فشل التنزيل",
    "installError": "فشل التثبيت",
    "upToDate": "محدّث",
    "devEnvironment": "بيئة التطوير: تم تعطيل البحث عن التحديثات",
    "clickToCheck": "انقر للبحث عن تحديثات",
    "viewOnGitHub": "عرض على GitHub",
    "noReleasesFound": "لم يتم العثور على إصدارات. ربما لم ينشر هذا المشروع أي إصدارات بعد.",
    "noStableReleasesFound": "لم يتم العثور على إصدارات مستقرة. قد تتوفر إصدارات تجريبية فقط."
  }
} as const;

export default messages;
