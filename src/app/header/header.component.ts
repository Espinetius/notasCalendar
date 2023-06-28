import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() registerClicked: EventEmitter<void> = new EventEmitter<void>();
    @Output() loggingClicked: EventEmitter<void> = new EventEmitter<void>();

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    onRegisterClick() {
        this.registerClicked.emit();
    }
    onLoggingClick() {
        this.loggingClicked.emit();
    }
}
