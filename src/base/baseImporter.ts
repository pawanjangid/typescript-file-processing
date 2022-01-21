export class BaseImporter {
    FilePath?: string;
    SupplierCode?: string;
    FileExtension?: string;
    SkipRows?: number;
    TotalColumn?: number;
}

export class BaseImporterRow {
    FilePath?: string;
    SupplierCode?: string;
    FileExtension?: string;
    SkipRows?: number;
    TotalColumn?: number;
}