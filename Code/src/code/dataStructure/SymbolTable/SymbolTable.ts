interface ISymbolTable<T> {
	put(key: number, value: string);
	get(key: number): string;
	delete(key: number);
	contains(key: number): boolean;
	isEmpty(): boolean;
	size(): number;
	keys(): number[];
}
class SymbolTable<T> implements ISymbolTable<T> {
	private Size: number;
	private Keys: number[];
	public constructor() {
	}
	public put(key: number, value: string) {

	}

	public get(key: number): string {
		return "";
	}

	public delete(key: number) {
		this.put(key, null);
	}

	public contains(key: number): boolean {
		return this.get(key) != null;
	}
	public isEmpty(): boolean {
		return this.Size == 0;
	}
	public size(): number {
		return this.Size
	}
	public keys(): number[] {
		return this.Keys
	}
}