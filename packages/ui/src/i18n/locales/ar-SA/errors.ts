const messages = {
  "error": {
    "evaluation": {
      "validation": "خطأ في التحقق من التقييم: {details}",
      "model_not_found": "خطأ في نموذج التقييم: النموذج \"{context}\" غير موجود أو غير مُفعَّل",
      "template_not_found": "خطأ في قالب التقييم: القالب \"{context}\" غير موجود",
      "parse": "خطأ في تحليل التقييم: {details}",
      "execution": "خطأ في تنفيذ التقييم: {details}"
    },
    "llm": {
      "api": "خطأ في الواجهة البرمجية: {details}",
      "config": "خطأ في الإعداد: {details}",
      "validation": "خطأ في التحقق: {details}",
      "initialization": "خطأ في التهيئة: {details}",
      "api_key_required": "فشل التحسين: لا يمكن أن يكون مفتاح API فارغًا",
      "model_not_found": "فشل التحسين: لم يتم العثور على النموذج",
      "template_invalid": "فشل التحسين: تنسيق الموجّه غير صالح",
      "empty_input": "فشل التحسين: لا يمكن أن يكون الموجّه فارغًا",
      "optimization_failed": "فشل التحسين",
      "iteration_failed": "فشل التكرار",
      "test_failed": "فشل الاختبار",
      "model_key_required": "فشل التحسين: لا يمكن أن يكون مفتاح النموذج فارغًا",
      "input_too_long": "فشل التحسين: محتوى الإدخال طويل جدًا"
    },
    "history": {
      "not_found": "لم يتم العثور على سجل التاريخ بالمعرّف \"{context}\"",
      "chain": "خطأ في سلسلة التاريخ: {details}",
      "record_not_found": "السجل غير موجود: {details}",
      "storage": "خطأ في تخزين التاريخ: {details}",
      "validation": "خطأ في التحقق من السجل: {details}"
    },
    "compare": {
      "validation": "خطأ في التحقق من المدخلات: {details}",
      "calculation": "خطأ في حساب المقارنة: {details}"
    },
    "storage": {
      "read": "خطأ في قراءة التخزين: {details}",
      "write": "خطأ في الكتابة إلى التخزين: {details}",
      "delete": "خطأ في حذف التخزين: {details}",
      "clear": "خطأ في مسح التخزين: {details}",
      "config": "خطأ في إعداد التخزين: {details}"
    },
    "model": {
      "validation": "خطأ في التحقق من النموذج: {details}",
      "config": "خطأ في إعداد النموذج: {details}"
    },
    "template": {
      "load": "خطأ في تحميل القالب: {details}",
      "not_found": "القالب غير موجود: {context}",
      "validation": "خطأ في التحقق من القالب: {details}",
      "cache": "خطأ في ذاكرة التخزين المؤقت للقالب: {details}",
      "storage": "خطأ في تخزين القالب: {details}"
    },
    "prompt": {
      "optimization": "خطأ في التحسين: {details}",
      "iteration": "خطأ في التكرار: {details}",
      "test": "خطأ في الاختبار: {details}",
      "service_dependency": "خطأ في تبعية الخدمة: {details}"
    },
    "favorite": {
      "not_found": "العنصر المفضل غير موجود: {context}",
      "already_exists": "العنصر المفضل موجود بالفعل",
      "category_not_found": "الفئة غير موجودة: {context}",
      "validation": "خطأ في التحقق: {details}",
      "storage": "خطأ في التخزين: {details}",
      "tag": "خطأ في الوسم: {details}",
      "tag_already_exists": "الوسم موجود بالفعل: {context}",
      "tag_not_found": "الوسم غير موجود: {context}",
      "migration": "خطأ في الترحيل: {details}",
      "import_export": "خطأ في الاستيراد/التصدير: {details}"
    },
    "image": {
      "prompt_empty": "لا يمكن أن يكون الموجّه فارغًا",
      "config_id_empty": "لا يمكن أن يكون معرّف إعداد نموذج الصورة فارغًا",
      "config_not_found": "لم يتم العثور على إعداد نموذج الصورة: {configId}",
      "config_not_enabled": "إعداد نموذج الصورة غير مُفعَّل: {configName}",
      "config_already_exists": "إعداد نموذج الصورة موجود بالفعل: {configId}",
      "config_does_not_exist": "إعداد نموذج الصورة غير موجود: {configId}",
      "config_invalid": "إعداد نموذج الصورة غير صالح: {details}",
      "api_key_required": "مفتاح API مطلوب لـ {providerName}",
      "model_id_required": "معرّف النموذج مطلوب",
      "config_provider_mismatch": "عدم تطابق مزوّد إعداد الصورة: config={configProviderId}, adapter={adapterProviderId}",
      "connection_config_missing_field": "حقل اتصال مطلوب مفقود: {field}",
      "connection_config_invalid_field_type": "حقل الاتصال {field} يجب أن يكون {expectedType}، الحالي {actualType}",
      "provider_not_found": "مزوّد الصورة غير موجود: {providerId}",
      "dynamic_models_not_supported": "{providerName} لا يدعم جلب النماذج ديناميكيًا",
      "unsupported_test_type": "نوع اختبار غير مدعوم: {testType}",
      "invalid_response_format": "تنسيق استجابة API غير صالح",
      "base64_decoding_not_supported": "فك ترميز Base64 غير مدعوم في هذه البيئة",
      "only_single_image_supported": "يتم دعم توليد صورة واحدة فقط",
      "text2image_input_image_not_allowed": "صورة المدخلات غير مسموح بها لتحويل النص إلى صورة",
      "image2image_input_image_required": "صورة المدخلات مطلوبة لتحويل الصورة إلى صورة",
      "input_image_b64_required": "يجب أن تكون صورة المدخلات بصيغة base64",
      "input_image_url_not_supported": "رابط صورة المدخلات غير مدعوم (base64 فقط)",
      "input_image_invalid_format": "تنسيق صورة المدخلات غير صالح",
      "input_image_unsupported_mime": "يتم دعم PNG/JPEG فقط (الحالي: {mimeType})",
      "input_image_too_large": "صورة المدخلات كبيرة جدًا (الحد الأقصى {maxSizeMB} ميجابايت)",
      "model_not_support_text2image": "النموذج لا يدعم تحويل النص إلى صورة: {modelName}",
      "model_not_support_image2image": "النموذج لا يدعم تحويل الصورة إلى صورة: {modelName}",
      "model_only_supports_image2image_need_input": "يدعم النموذج تحويل الصورة إلى صورة فقط. يرجى تقديم صورة مدخلات: {modelName}",
      "generation_failed": "فشل توليد الصورة: {details}"
    },
    "context": {
      "not_found": "السياق غير موجود: {context}",
      "minimum_violation": "لا يمكن إزالة السياق الأخير",
      "invalid_id": "معرّف سياق غير صالح: {context}",
      "import_format": "تنسيق استيراد السياق غير صالح: {details}",
      "invalid_store": "مخزن سياق غير صالح: {details}",
      "storage": "خطأ في تخزين السياق: {details}",
      "electron_api_unavailable": "خدمة السياق غير متاحة في هذه البيئة"
    },
    "variable_extraction": {
      "validation": "خطأ في التحقق من استخراج المتغيرات: {details}",
      "model_not_found": "نموذج استخراج المتغيرات غير موجود: {context}",
      "parse": "خطأ في تحليل استخراج المتغيرات: {details}",
      "execution": "خطأ في تنفيذ استخراج المتغيرات: {details}"
    },
    "variable_value_generation": {
      "validation": "خطأ في التحقق من توليد قيم المتغيرات: {details}",
      "model_not_found": "نموذج توليد قيم المتغيرات غير موجود: {context}",
      "parse": "خطأ في تحليل توليد قيم المتغيرات: {details}",
      "execution": "خطأ في تنفيذ توليد قيم المتغيرات: {details}"
    },
    "import_export": {
      "export_failed": "فشل التصدير: {details}",
      "import_failed": "فشل الاستيراد: {details}",
      "validation": "خطأ في التحقق من الاستيراد/التصدير: {details}"
    },
    "data": {
      "invalid_json": "JSON غير صالح: {details}",
      "invalid_format": "تنسيق بيانات غير صالح: {details}",
      "import_partial_failed": "اكتمل الاستيراد مع {count} من الأخطاء: {details}",
      "export_failed": "فشل تصدير البيانات: {details}",
      "electron_api_unavailable": "خدمة البيانات غير متاحة في هذه البيئة"
    },
    "core": {
      "ipc_serialization_failed": "فشل تسلسل IPC: {details}"
    }
  }
} as const;

export default messages;
