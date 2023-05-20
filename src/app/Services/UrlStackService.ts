import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UrlStackService {
    static urlStack: string[] = [];
    static index: number = 0;

    static popLastUrl(): string | undefined{
        const result = this.urlStack.pop();
        console.log(result, "pop")
        return result;
    }

    static pushUrl(url: string) : void{
        console.log(url, "push")
        this.urlStack.push(url);
    }
}